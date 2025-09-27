const getDashboard = async (req, res) => {
  return res.json({ role: 'admin', data: [] });
};

export { getDashboard };
