import { Router } from 'express';
import auth from '../middleware/authMiddleware.js';
import allow from '../middleware/roleMiddleware.js';
import * as ctrl from '../controllers/studentController.js';
import { body, param, query } from 'express-validator';
import validate from '../middleware/validate.js';

const router = Router();

router.use(auth, allow('student'));

router.get('/lessons', [query('lang').optional().isIn(['en', 'hi', 'es', 'fr'])], validate, ctrl.getLessons);
router.post('/lessons/:id/complete', [param('id').isMongoId()], validate, ctrl.markLessonCompleted);
router.get('/quizzes', [query('lang').optional().isIn(['en', 'hi', 'es', 'fr'])], validate, ctrl.getQuizzes);
router.post(
  '/quizzes/:id/attempt',
  [
    param('id').isMongoId(),
    body('answers').isArray().custom(arr => arr.every(n => Number.isInteger(n)))
  ],
  validate,
  ctrl.submitQuizAttempt
);
router.get('/progress', ctrl.getProgress);
router.get('/badges', ctrl.getBadges);

// Offline sync endpoints
router.get('/offline/pack', [query('lang').optional().isIn(['en', 'hi', 'es', 'fr'])], validate, ctrl.getOfflinePack);
router.post(
  '/offline/sync',
  [
    body('lessonsCompleted').optional().isArray(),
    body('lessonsCompleted.*').optional().isMongoId(),
    body('quizScores').optional().isArray(),
    body('quizScores.*.quizId').optional().isMongoId(),
    body('quizScores.*.score').optional().isInt(),
    body('quizScores.*.total').optional().isInt(),
    body('quizScores.*.date').optional().isISO8601()
  ],
  validate,
  ctrl.syncOfflineProgress
);

export default router;
