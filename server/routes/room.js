const router = require('express').Router();
const { roomController } = require('../controllers');

router.post('/',  roomController.addRoom)

module.exports = router;
