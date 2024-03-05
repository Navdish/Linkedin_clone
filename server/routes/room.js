const router = require('express').Router();
const { roomController } = require('../controllers');

router.post('/',  roomController.addRoom)
router.get('/', roomController.fetchRoom)

module.exports = router;
