const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { jwtSecret } = require('../config/auth');
const { sendEmail } = require('../utils/emailService');
const User = require('../models/User');

/**
 * POST /api/auth/register
 * Body: { name, email, password, role: 'student'|'parent', language? }
 * Res: { token, user: { _id, name, email, role, language } }
 */
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role = 'student', language = 'en' } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Missing required fields' });
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: 'Email already in use' });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash, role, language });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || jwtSecret, { expiresIn: '7d' });
    return res.status(201).json({ token, user: { _id: user._id, name, email, role: user.role, language: user.language } });
  } catch (err) { next(err); }
};

/**
 * POST /api/auth/login
 * Body: { email, password }
 * Res: { token, user }
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || jwtSecret, { expiresIn: '7d' });
    return res.json({ token, user: { _id: user._id, name: user.name, email: user.email, role: user.role, language: user.language } });
  } catch (err) { next(err); }
};

/**
 * POST /api/auth/forgot-password
 * Body: { email }
 * Res: { message }
 */
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const token = crypto.randomBytes(20).toString('hex');
      user.resetToken = token;
      user.resetTokenExp = new Date(Date.now() + 1000 * 60 * 30); // 30 min
      await user.save();
      try {
        await sendEmail({ to: email, subject: 'Password reset', html: `<p>Your reset token: ${token}</p>` });
      } catch (e) {
        // Log and continue silently in dev
      }
    }
    return res.json({ message: 'If the email exists, a reset link has been sent.' });
  } catch (err) { next(err); }
};

/**
 * POST /api/auth/reset-password
 * Body: { token, password }
 * Res: { message }
 */
exports.resetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;
    const user = await User.findOne({ resetToken: token, resetTokenExp: { $gt: new Date() } });
    if (!user) return res.status(400).json({ message: 'Invalid or expired token' });
    user.password = await bcrypt.hash(password, 10);
    user.resetToken = undefined;
    user.resetTokenExp = undefined;
    await user.save();
    return res.json({ message: 'Password updated successfully' });
  } catch (err) { next(err); }
};
