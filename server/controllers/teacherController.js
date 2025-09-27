exports.getDashboard = async (req, res) => {
  return res.json({ role: 'teacher', data: [] });
};
