import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    hi: { type: String },
    pa: { type: String },
  },
  content: {
    en: { type: String, required: true },
    hi: { type: String },
    pa: { type: String },
  },
  media: [{
    type: { type: String, enum: ['audio', 'video', 'image', 'pdf', 'ppt'], default: 'audio' },
    url: String,
    language: { type: String, enum: ['en', 'hi', 'pa'], default: 'en' }
  }],
  tags: [String],
  offlineReady: { type: Boolean, default: false },
  className: { type: String, required: true },
  section: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Lesson', lessonSchema);
