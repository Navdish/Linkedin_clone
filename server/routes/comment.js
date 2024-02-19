const router = require('express').Router();
const { commentController } = require('../controllers');
const {Auth} = require("../middleware/index");

router.get('/',  commentController.fetchComment);
router.post('/',  commentController.postComment);
router.put('/:commentId',  commentController.updateComment);
router.delete('/:commentId',  commentController.deleteComment);

module.exports = router;