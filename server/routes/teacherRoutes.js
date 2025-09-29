import { Router } from 'express';
import { getDashboard, createLesson } from '../controllers/teacherController.js';
import { createClass, getClasses } from '../controllers/teacherClassController.js';
import multer from 'multer';
import auth from '../middleware/authMiddleware.js';
import allow from '../middleware/roleMiddleware.js';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/lessons/'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get('/dashboard', getDashboard);
router.post('/lessons', upload.fields([
  { name: 'pdfFile', maxCount: 1 },
  { name: 'pptFile', maxCount: 1 },
  { name: 'imageFile', maxCount: 1 },
  { name: 'audio', maxCount: 1 } // Assuming audio is also a file upload now
]), createLesson);

router.use(auth, allow('teacher')); // Protect all teacher routes

router.post('/classes', [
  body('name').notEmpty().withMessage('Class name is required'),
  body('section').notEmpty().withMessage('Section is required'),
], validate, createClass);
router.get('/classes', getClasses);

router.get('/classes/requests', getPendingStudentRequests);
router.post('/classes/requests/approve', [
  body('classId').notEmpty().withMessage('Class ID is required').isMongoId().withMessage('Invalid Class ID'),
  body('studentId').notEmpty().withMessage('Student ID is required').isMongoId().withMessage('Invalid Student ID'),
], validate, approveStudentRequest);

export default router;
