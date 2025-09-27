module.exports = function roleMiddleware(...allowedRoles) {
  return (req, res, next) => {
    try {
      if (!req.user || !req.user.role) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      if (allowedRoles.length && !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      return next();
    } catch (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }
  };
}
