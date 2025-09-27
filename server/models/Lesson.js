const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    hi: { type: String },
    es: { type: String },
    fr: { type: String },
  },
  content: {
    en: { type: String, required: true },
    hi: { type: String },
    es: { type: String },
    fr: { type: String },
  },
  media: [{
    type: { type: String, enum: ['audio', 'video', 'image', 'pdf'], default: 'audio' },
    url: String,
    language: { type: String, enum: ['en', 'hi', 'es', 'fr'], default: 'en' }
  }],
  tags: [String],
  offlineReady: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);
