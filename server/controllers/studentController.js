import Lesson from '../models/Lesson.js';
import Quiz from '../models/Quiz.js';
import Progress from '../models/Progress.js';
import { maintainProgress } from '../utils/progress.js';
import Class from '../models/Class.js'; // Added import for Class model

// GET /api/student/lessons?lang=en
export const getLessons = async (req, res, next) => {
  try {
    const lang = ['en', 'hi', 'pa'].includes(req.query.lang) ? req.query.lang : 'en';
    const lessons = await Lesson.find({}, { 
      [`title.${lang}`]: 1, 
      'title.en': 1, // Always include English as fallback
      [`content.${lang}`]: 1, 
      'content.en': 1, // Always include English as fallback
      media: { 
        $filter: {
          input: '$media',
          as: 'item',
          cond: { $in: ['$$item.language', [lang, 'en']] }
        }
      },
      tags: 1 
    });
    return res.json({ lessons });
  } catch (err) { next(err); }
};

// POST /api/student/lessons/:id/complete
export const markLessonCompleted = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const progress = await Progress.findOneAndUpdate(
      { userId },
      { $addToSet: { lessonsCompleted: id }, $set: { lastActivityDate: new Date() } },
      { new: true, upsert: true }
    );
    await maintainProgress(userId);
    return res.json({ message: 'Lesson marked completed', progress });
  } catch (err) { next(err); }
};

// GET /api/student/quizzes
export const getQuizzes = async (req, res, next) => {
  try {
    const lang = ['en', 'hi', 'pa'].includes(req.query.lang) ? req.query.lang : 'en';
    const quizzes = await Quiz.aggregate([
      {
        $project: {
          title: {
            [lang]: 1,
            en: 1 // Always include English as fallback
          },
          questions: {
            $map: {
              input: '$questions',
              as: 'question',
              in: {
                _id: '$$question._id',
                prompt: {
                  [lang]: '$$question.prompt.' + lang,
                  en: '$$question.prompt.en' // Always include English as fallback
                },
                options: '$$question.options',
                correctIndex: '$$question.correctIndex'
              }
            }
          },
          tags: 1
        }
      }
    ]);
    return res.json({ quizzes });
  } catch (err) { next(err); }
};

// POST /api/student/quizzes/:id/attempt { answers: [index...] }
export const submitQuizAttempt = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { answers = [] } = req.body;
    const quiz = await Quiz.findById(id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    let score = 0;
    quiz.questions.forEach((q, idx) => {
      if (answers[idx] === q.correctIndex) score += 1;
    });
    const total = quiz.questions.length;
    await Progress.findOneAndUpdate(
      { userId },
      { $push: { quizScores: { quizId: id, score, total } }, $set: { lastActivityDate: new Date() } },
      { new: true, upsert: true }
    );
    await maintainProgress(userId);
    return res.json({ score, total, percentage: total ? Math.round((score / total) * 100) : 0 });
  } catch (err) { next(err); }
};

// GET /api/student/progress
export const getProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const progress = await Progress.findOne({ userId }).populate('lessonsCompleted', '_id');
    return res.json({ progress: progress || { userId, lessonsCompleted: [], quizScores: [] } });
  } catch (err) { next(err); }
};

// GET /api/student/badges
export const getBadges = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const progress = await Progress.findOne({ userId }).populate('lessonsCompleted', '_id').populate('quizScores', 'quizId');
    if (!progress) return res.json({ badges: [], stats: {} });

    const badges = [];
    const lessonsCount = progress.lessonsCompleted?.length || 0;
    const quizScores = progress.quizScores || [];
    const totalScore = quizScores.reduce((sum, q) => sum + (q.score || 0), 0);
    const avg = quizScores.length ? Math.round(totalScore / quizScores.length) : 0;
    const streak = progress.streakCount || 0;

    if (lessonsCount >= 1) badges.push('Starter');
    if (lessonsCount >= 5) badges.push('Explorer');
    if (lessonsCount >= 10) badges.push('Scholar');
    if (avg >= 80) badges.push('Quiz Whiz');
    if (streak >= 3) badges.push('3-Day Streak');
    if (streak >= 7) badges.push('Weekly Warrior');

    return res.json({ badges, stats: { lessonsCount, avgScore: avg, streak } });
  } catch (err) { next(err); }
};

// Offline: GET /api/student/offline/pack?lang=en
export const getOfflinePack = async (req, res, next) => {
  try {
    const lang = req.query.lang || 'en';

    const [lessons, quizzes] = await Promise.all([
      Lesson.find(
        { offlineReady: true },
        { 
          [`title.${lang}`]: 1,
          'title.en': 1,
          [`content.${lang}`]: 1,
          'content.en': 1,
          media: 1,
          tags: 1
        }
      ),
      Quiz.aggregate([
        { $match: { offlineReady: true } },
        { $project: {
            [`title.${lang}`]: 1,
            'title.en': 1,
            questions: 1,
            totalMarks: 1
        }}
      ])
    ]);

    const offlinePack = {
      timestamp: new Date(),
      lessons: lessons,
      quizzes: quizzes,
    };

    res.status(200).json(offlinePack);
  } catch (err) { next(err); }
};

// Offline: POST /api/student/offline/sync { lessonsCompleted: [ids], quizScores: [{ quizId, score, total, date? }] }
export const syncOfflineProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { lessonsCompleted = [], quizScores = [] } = req.body;
    const progress = await Progress.findOneAndUpdate(
      { userId },
      {
        $addToSet: { lessonsCompleted: { $each: lessonsCompleted } },
        $push: { quizScores: { $each: quizScores } },
        $set: { lastActivityDate: new Date() }
      },
      { new: true, upsert: true }
    );
    await maintainProgress(userId);
    return res.json({ message: 'Synced', progress });
  } catch (err) { next(err); }
};

export const requestJoinClass = async (req, res, next) => {
  try {
    const { classId } = req.body;
    const studentId = req.user.id;

    const existingClass = await Class.findById(classId);

    if (!existingClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // Check if student is already in the class or has a pending request
    if (existingClass.students.includes(studentId)) {
      return res.status(400).json({ message: 'Student already in this class' });
    }
    if (existingClass.pendingStudents.includes(studentId)) {
      return res.status(400).json({ message: 'Join request already pending for this class' });
    }

    const updatedClass = await Class.findByIdAndUpdate(
      classId,
      { $addToSet: { pendingStudents: studentId } },
      { new: true }
    );

    res.status(200).json({ message: 'Join request sent', class: updatedClass });
  } catch (err) {
    console.error('Error requesting to join class:', err);
    next(err);
  }
};
