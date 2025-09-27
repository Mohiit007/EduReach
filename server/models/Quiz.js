import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  prompt: {
    en: { type: String, required: true },
    hi: { type: String },
    pa: { type: String },
  },
  options: [{ type: String, required: true }],
  correctIndex: { type: Number, required: true },
}, { _id: false });

const quizSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    hi: { type: String },
    pa: { type: String },
  },
  questions: { type: [questionSchema], default: [] },
  tags: [String],
}, { timestamps: true });

export default mongoose.model('Quiz', quizSchema);
