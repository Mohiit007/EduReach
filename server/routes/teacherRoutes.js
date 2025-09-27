import { Router } from 'express';
import { getDashboard } from '../controllers/teacherController.js';

const router = Router();
router.get('/dashboard', getDashboard);

export default router;
