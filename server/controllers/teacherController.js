const getDashboard = async (req, res) => {
  return res.json({ role: 'teacher', data: [] });
};

export { getDashboard };
