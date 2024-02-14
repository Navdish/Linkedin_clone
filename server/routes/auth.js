const router = require('express').Router();
const { authController } = require('../controllers');

router.post('/signup', authController.create_user)
router.post('/login', authController.login)

module.exports = router;