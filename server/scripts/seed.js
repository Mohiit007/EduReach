/* eslint-disable no-console */
const dotenv = require('dotenv');
const path = require('path');
const { connectDB } = require('../config/db');
const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');
const VirtualExperiment = require('../models/VirtualExperiment');

// Load .env from monorepo root
dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

async function run() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('MONGO_URI not set');
    process.exit(1);
  }
  await connectDB(uri);

  console.log('Seeding lessons...');
  await Lesson.deleteMany({});
  await Lesson.insertMany([
    {
      title: { en: 'Basic Algebra', hi: 'मूल बीजगणित' },
      content: { en: 'Algebra basics content', hi: 'बीजगणित मूल बातें' },
      media: [{ type: 'audio', url: 'https://example.com/algebra.mp3', language: 'en' }],
      tags: ['math', 'algebra'],
      offlineReady: true,
    },
    {
      title: { en: 'Photosynthesis' },
      content: { en: 'Plants making food using sunlight.' },
      media: [],
      tags: ['science', 'biology'],
      offlineReady: true,
    },
  ]);

  console.log('Seeding quizzes...');
  await Quiz.deleteMany({});
  await Quiz.create({
    title: { en: 'Algebra Quiz 1' },
    questions: [
      { prompt: { en: '2 + 2 = ?' }, options: ['3', '4', '5'], correctIndex: 1 },
      { prompt: { en: '5 - 3 = ?' }, options: ['1', '2', '3'], correctIndex: 1 },
    ],
    tags: ['math', 'algebra'],
  });

  console.log('Seeding virtual experiments...');
  await VirtualExperiment.deleteMany({});
  await VirtualExperiment.create({
    name: 'Acid-Base Neutralization',
    description: 'Combine acid and base to form salt and water',
    reagents: [{ name: 'HCl', amount: '10ml' }, { name: 'NaOH', amount: '10ml' }],
    steps: [
      { order: 1, instruction: 'Add HCl to beaker' },
      { order: 2, instruction: 'Add NaOH slowly while stirring' },
    ],
    expectedOutcome: 'Neutral solution with salt and water formed',
  });

  console.log('Seeding complete');
  process.exit(0);
}

run().catch((e) => { console.error(e); process.exit(1); });
