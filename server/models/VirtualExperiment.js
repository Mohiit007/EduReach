const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  inputs: { type: Object, default: {} },
  outcome: { type: String },
  score: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
}, { _id: false });

const virtualExperimentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  reagents: [{ name: String, amount: String }],
  steps: [{ order: Number, instruction: String }],
  expectedOutcome: { type: String },
  results: { type: [resultSchema], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('VirtualExperiment', virtualExperimentSchema);
