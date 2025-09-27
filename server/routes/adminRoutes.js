const router = require('express').Router();
const { getDashboard } = require('../controllers/adminController');

router.get('/dashboard', getDashboard);

module.exports = router;
