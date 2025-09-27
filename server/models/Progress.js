const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  // Lessons completion
  lessonsCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  // Quiz scores per quiz id
  quizScores: [{
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
    score: Number,
    total: Number,
    date: { type: Date, default: Date.now }
  }],
  // Streaks
  streakCount: { type: Number, default: 0 },
  lastActivityDate: { type: Date },
  // Cached report snapshot for quick dashboard reads
  reportSnapshot: {
    completionPercent: { type: Number, default: 0 },
    badges: [{ type: String }]
  }
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);
