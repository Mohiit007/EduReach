import { Router } from 'express';
import auth from '../middleware/authMiddleware.js';
import allow from '../middleware/roleMiddleware.js';
import * as ctrl from '../controllers/parentController.js';
import { body, param } from 'express-validator';
import validate from '../middleware/validate.js';

const router = Router();

router.use(auth, allow('parent'));

router.post('/link-child', [body('childEmail').isEmail()], validate, ctrl.linkChild);
router.get('/child-progress/:childId', [param('childId').isMongoId()], validate, ctrl.getChildProgress);

export default router;
