const router = require('express').Router();
const { getDashboard } = require('../controllers/teacherController');

router.get('/dashboard', getDashboard);

module.exports = router;
