const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/auth');

module.exports = function authMiddleware(req, res, next) {
  try {
    const auth = req.headers.authorization || '';
    if (!auth.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = auth.substring(7);
    const payload = jwt.verify(token, process.env.JWT_SECRET || jwtSecret);
    req.user = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
