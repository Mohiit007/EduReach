import { Router } from 'express';
import auth from '../middleware/authMiddleware.js';
import allow from '../middleware/roleMiddleware.js';
import { getLessons, markLessonCompleted, getQuizzes, submitQuizAttempt, getProgress, getBadges, getOfflinePack, syncOfflineProgress, requestJoinClass } from '../controllers/studentController.js';
import { body, param, query } from 'express-validator';
import validate from '../middleware/validate.js';

const router = Router();

// All student routes require authentication and student role
router.use(auth, allow('student'));

router.get('/dashboard', (req, res) => {
  res.send('Student Dashboard');
});

router.get('/lessons', [query('lang').optional().isIn(['en', 'hi', 'es', 'fr'])], validate, getLessons);
router.post('/lessons/:id/complete', [param('id').isMongoId()], validate, markLessonCompleted);
router.get('/quizzes', [query('lang').optional().isIn(['en', 'hi', 'es', 'fr'])], validate, getQuizzes);
router.post(
  '/quizzes/:id/attempt',
  [
    param('id').isMongoId(),
    body('answers').isArray().custom(arr => arr.every(n => Number.isInteger(n)))
  ],
  validate,
  submitQuizAttempt
);
router.get('/progress', getProgress);
router.get('/badges', getBadges);

// Offline sync endpoints
router.get('/offline/pack', [query('lang').optional().isIn(['en', 'hi', 'es', 'fr'])], validate, getOfflinePack);
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
  syncOfflineProgress
);

router.post('/classes/join-request', [
  body('classId').notEmpty().withMessage('Class ID is required').isMongoId().withMessage('Invalid Class ID'),
], validate, requestJoinClass);

export default router;
