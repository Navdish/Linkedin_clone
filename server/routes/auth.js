const router = require('express').Router();
const { userController } = require('../controllers');

router.post('/signup', userController.create_user)
router.post('/login', userController.login)

module.exports = router;