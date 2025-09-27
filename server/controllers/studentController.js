import Lesson from '../models/Lesson.js';
import Quiz from '../models/Quiz.js';
import Progress from '../models/Progress.js';
import { maintainProgress } from '../utils/progress.js';

// GET /api/student/lessons?lang=en
const getLessons = async (req, res, next) => {
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
const markLessonCompleted = async (req, res, next) => {
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
const getQuizzes = async (req, res, next) => {
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
const submitQuizAttempt = async (req, res, next) => {
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
const getProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const progress = await Progress.findOne({ userId }).populate('lessonsCompleted', '_id');
    return res.json({ progress: progress || { userId, lessonsCompleted: [], quizScores: [] } });
  } catch (err) { next(err); }

// GET /api/student/badges
const getBadges = async (req, res, next) => {
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
const getOfflinePack = async (req, res, next) => {
  try {
{{ ... }}
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
        {
          $project: {
            title: {
              [lang]: 1,
              en: 1
            },
            questions: {
              $map: {
                input: '$questions',
                as: 'question',
                in: {
                  _id: '$$question._id',
                  prompt: {
                    [lang]: `$$question.prompt.${lang}`,
                    en: '$$question.prompt.en'
                  },
                  options: '$$question.options',
                  correctIndex: '$$question.correctIndex'
                }
              }
            },
            tags: 1
          }
        }
      ])
    ]);
    return res.json({ lessons, quizzes });
  } catch (err) { next(err); }
};

// Offline: POST /api/student/offline/sync { lessonsCompleted: [ids], quizScores: [{ quizId, score, total, date? }] }
const syncOfflineProgress = async (req, res, next) => {
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
export {
  getLessons,
  markLessonCompleted,
  getQuizzes,
  submitQuizAttempt,
  getProgress,
  getBadges,
  getOfflinePack,
  syncOfflineProgress
};
