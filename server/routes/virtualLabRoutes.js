const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const allow = require('../middleware/roleMiddleware');
const { listExperiments, getExperiment, simulateExperiment, submitResult } = require('../controllers/virtualLabController');
const { body, param } = require('express-validator');
const validate = require('../middleware/validate');

// Public list could be allowed, but we'll keep it protected for students
router.use(auth, allow('student'));

router.get('/experiments', listExperiments);
router.get('/experiments/:id', [param('id').isMongoId()], validate, getExperiment);
router.post('/experiments/:id/simulate', [param('id').isMongoId(), body('inputs').optional().isObject()], validate, simulateExperiment);
router.post('/experiments/:id/submit', [param('id').isMongoId(), body('inputs').optional().isObject(), body('score').optional().isInt()], validate, submitResult);

module.exports = router;
