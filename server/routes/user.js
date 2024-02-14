const router = require('express').Router();
const { userController } = require('../controllers');
const {Auth} = require("../middleware/index");

router.put('/', Auth.authenticateUser, userController.update_user)

module.exports = router;