import VirtualExperiment from '../models/VirtualExperiment.js';

// GET /api/virtual-lab
const listExperiments = async (req, res, next) => {
  try {
    const experiments = await VirtualExperiment.find({}, 'name description reagents steps');
    return res.json({ experiments });
  } catch (err) { next(err); }
};

// POST /api/virtual-lab
const createExperiment = async (req, res, next) => {
  try {
    const { name, description, reagents, steps, expectedOutcome } = req.body;
    const exp = await VirtualExperiment.create({ name, description, reagents, steps, expectedOutcome });
    return res.status(201).json(exp);
  } catch (err) { next(err); }
};

// POST /api/virtual-lab/:id/simulate { inputs }
const simulateExperiment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { inputs = {} } = req.body;
    const exp = await VirtualExperiment.findById(id);
    if (!exp) return res.status(404).json({ message: 'Experiment not found' });
    // Simple heuristic: if inputs include all reagents names, score higher
    const reagentNames = (exp.reagents || []).map(r => (r.name || '').toLowerCase());
    const provided = Object.keys(inputs).map(k => k.toLowerCase());
    const matched = provided.filter(p => reagentNames.includes(p)).length;
    const score = Math.round((matched / Math.max(1, reagentNames.length)) * 100);
    const outcome = score > 70 ? exp.expectedOutcome || 'Successful reaction' : 'Partial/Incorrect outcome';
    return res.json({ outcome, score });
  } catch (err) { next(err); }
};

// POST /api/virtual-lab/:id/submit { inputs, outcome?, score? }
const submitResult = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { inputs = {}, outcome, score } = req.body;
    const userId = req.user.id;
    const exp = await VirtualExperiment.findByIdAndUpdate(
      id,
      { $push: { results: { userId, inputs, outcome, score: Number(score) || 0 } } },
      { new: true }
    );
    if (!exp) return res.status(404).json({ message: 'Experiment not found' });
    return res.json({ message: 'Result recorded', experiment: { _id: exp._id, resultsCount: exp.results.length } });
  } catch (err) { next(err); }
};

export {
  listExperiments,
  createExperiment,
  simulateExperiment,
  submitResult
};
