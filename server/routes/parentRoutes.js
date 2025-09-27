const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const allow = require('../middleware/roleMiddleware');
const ctrl = require('../controllers/parentController');
const { body, param } = require('express-validator');
const validate = require('../middleware/validate');

router.use(auth, allow('parent'));

router.post('/link-child', [body('childEmail').isEmail()], validate, ctrl.linkChild);
router.get('/child-progress/:childId', [param('childId').isMongoId()], validate, ctrl.getChildProgress);

module.exports = router;
