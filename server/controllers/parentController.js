const User = require('../models/User');
const Progress = require('../models/Progress');

// POST /api/parent/link-child { childEmail }
exports.linkChild = async (req, res, next) => {
  try {
    const parentId = req.user.id;
    const { childEmail } = req.body;
    if (!childEmail) return res.status(400).json({ message: 'childEmail required' });
    const child = await User.findOne({ email: childEmail, role: 'student' });
    if (!child) return res.status(404).json({ message: 'Student not found' });

    const parent = await User.findByIdAndUpdate(
      parentId,
      { $addToSet: { children: child._id } },
      { new: true }
    ).populate('children', 'name email');

    return res.json({ message: 'Child linked', parent });
  } catch (err) { next(err); }
};

// GET /api/parent/child-progress/:childId
exports.getChildProgress = async (req, res, next) => {
  try {
    const parentId = req.user.id;
    const { childId } = req.params;
    const parent = await User.findById(parentId).select('children');
    if (!parent || !parent.children.some(id => String(id) === String(childId))) {
      return res.status(403).json({ message: 'Child not linked to this parent' });
    }
    const progress = await Progress.findOne({ userId: childId }) || { userId: childId, lessonsCompleted: [], quizScores: [] };
    return res.json({ progress });
  } catch (err) { next(err); }
};
