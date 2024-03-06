const router = require('express').Router();
const { messageController } = require('../controllers');

router.get('/', messageController.fetchMessage);

module.exports = router;