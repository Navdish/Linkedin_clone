const router = require('express').Router();
const { notificationController } = require('../controller/index');

router.post("/", notificationController.createNotification)

module.exports = router;