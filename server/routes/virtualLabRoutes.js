import { Router } from 'express';
import auth from '../middleware/authMiddleware.js';
import allow from '../middleware/roleMiddleware.js';
import { listExperiments, getExperiment, simulateExperiment, submitResult } from '../controllers/virtualLabController.js';
import { body, param } from 'express-validator';
import validate from '../middleware/validate.js';

const router = Router();

// Public list could be allowed, but we'll keep it protected for students
router.use(auth, allow('student'));

router.get('/experiments', listExperiments);
router.get('/experiments/:id', [param('id').isMongoId()], validate, getExperiment);
router.post('/experiments/:id/simulate', [param('id').isMongoId(), body('inputs').optional().isObject()], validate, simulateExperiment);
router.post('/experiments/:id/submit', [param('id').isMongoId(), body('inputs').optional().isObject(), body('score').optional().isInt()], validate, submitResult);

export default router;
