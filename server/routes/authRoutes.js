import { Router } from 'express';
import { login, register, forgotPassword, resetPassword } from '../controllers/authController.js';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';

const router = Router();

router.post(
  '/register',
  [
    body('name').isString().notEmpty(),
    body('email').isEmail(),
    body('password').isString().isLength({ min: 6 }),
    body('role').optional().isIn(['student', 'parent']),
    body('language').optional().isIn(['en', 'hi', 'es', 'fr'])
  ],
  validate,
  register
);

router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').isString().notEmpty()
  ],
  validate,
  login
);

router.post(
  '/forgot-password',
  [ body('email').isEmail() ],
  validate,
  forgotPassword
);

router.post(
  '/reset-password',
  [ body('token').isString().notEmpty(), body('password').isString().isLength({ min: 6 }) ],
  validate,
  resetPassword
);

export default router;
