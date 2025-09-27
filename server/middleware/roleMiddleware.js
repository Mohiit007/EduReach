const roleMiddleware = (...allowedRoles) => {
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
      console.error('Role middleware error:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
};

export default roleMiddleware;
