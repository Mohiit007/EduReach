const jwt = require('jsonwebtoken');

function makeToken({ id = '507f1f77bcf86cd799439011', role = 'student', expiresIn = '1h' } = {}) {
  const secret = process.env.JWT_SECRET || 'change_me';
  return jwt.sign({ id, role }, secret, { expiresIn });
}

module.exports = { makeToken };
