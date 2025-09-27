const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load .env from monorepo root
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/student', require('./routes/studentRoutes'));
app.use('/api/parent', require('./routes/parentRoutes'));
app.use('/api/virtual-lab', require('./routes/virtualLabRoutes'));

// Import error handlers
const { notFound, errorHandler } = require('./middleware/errorHandler');

// 404 handler - must be before error handler
app.use(notFound);

// Error handler - must be last middleware
app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

module.exports = app;
