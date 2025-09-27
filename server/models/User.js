const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, index: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'parent'], default: 'student', index: true },
  language: { type: String, enum: ['en', 'hi', 'es', 'fr'], default: 'en' },
  // Parent-child linking: for parents, store child user IDs (role: student)
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  // Password reset
  resetToken: { type: String },
  resetTokenExp: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
