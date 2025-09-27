exports.getDashboard = async (req, res) => {
  return res.json({ role: 'super-admin', data: [] });
};
