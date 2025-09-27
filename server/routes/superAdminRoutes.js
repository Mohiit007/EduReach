const router = require('express').Router();
const { getDashboard } = require('../controllers/superAdminController');

router.get('/dashboard', getDashboard);

module.exports = router;
