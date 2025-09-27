const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');
const Progress = require('../models/Progress');
const { maintainProgress } = require('../utils/progress');

// GET /api/student/lessons?lang=en
exports.getLessons = async (req, res, next) => {
  try {
    const lang = (req.query.lang || 'en');
    const lessons = await Lesson.find({}, { [`title.${lang}`]: 1, [`content.${lang}`]: 1, media: 1, tags: 1 });
    return res.json({ lessons });
  } catch (err) { next(err); }
};

// POST /api/student/lessons/:id/complete
exports.markLessonCompleted = async (req, res, next) => {
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
exports.getQuizzes = async (req, res, next) => {
  try {
    const lang = (req.query.lang || 'en');
    const quizzes = await Quiz.find({}, { [`title.${lang}`]: 1, questions: 1, tags: 1 });
    return res.json({ quizzes });
  } catch (err) { next(err); }
};

// POST /api/student/quizzes/:id/attempt { answers: [index...] }
exports.submitQuizAttempt = async (req, res, next) => {
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
exports.getProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const progress = await Progress.findOne({ userId }).populate('lessonsCompleted', '_id');
    return res.json({ progress: progress || { userId, lessonsCompleted: [], quizScores: [] } });
  } catch (err) { next(err); }
};

// GET /api/student/badges
exports.getBadges = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const progress = await Progress.findOne({ userId });
    const badges = [];
    if (!progress) return res.json({ badges });

    const lessonsCount = (progress.lessonsCompleted || []).length;
    const avg = (() => {
      const arr = progress.quizScores || [];
      if (!arr.length) return 0;
      const totalPerc = arr.reduce((acc, q) => acc + (q.total ? (q.score / q.total) * 100 : 0), 0);
      return Math.round(totalPerc / arr.length);
    })();
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
exports.getOfflinePack = async (req, res, next) => {
  try {
    const lang = req.query.lang || 'en';
    const lessons = await Lesson.find({ offlineReady: true }, { [`title.${lang}`]: 1, [`content.${lang}`]: 1, media: 1 });
    return res.json({ lessons });
  } catch (err) { next(err); }
};

// Offline: POST /api/student/offline/sync { lessonsCompleted: [ids], quizScores: [{ quizId, score, total, date? }] }
exports.syncOfflineProgress = async (req, res, next) => {
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
