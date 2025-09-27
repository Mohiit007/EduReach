const getDashboard = async (req, res) => {
  return res.json({ role: 'super-admin', data: [] });
};

export { getDashboard };
