const router = require('express').Router();
const { commentController } = require('../controllers');
const {Auth} = require("../middleware/index");

router.get('/', Auth.authenticateUser, commentController.fetchComment);
router.post('/', Auth.authenticateUser, commentController.postComment);
router.put('/', Auth.authenticateUser, commentController.updateComment);
router.delete('/', Auth.authenticateUser, commentController.deleteComment);

module.exports = router;