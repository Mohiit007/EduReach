const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  prompt: {
    en: { type: String, required: true },
    hi: { type: String },
    es: { type: String },
    fr: { type: String },
  },
  options: [{ type: String, required: true }],
  correctIndex: { type: Number, required: true },
}, { _id: false });

const quizSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    hi: { type: String },
    es: { type: String },
    fr: { type: String },
  },
  questions: { type: [questionSchema], default: [] },
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
