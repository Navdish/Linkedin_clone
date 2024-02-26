const router = require('express').Router();
const { commentController } = require('../controllers');

router.get('/',  commentController.fetchComment);
router.post('/',  commentController.postComment);
router.put('/:commentId',  commentController.updateComment);
router.delete('/:commentId',  commentController.deleteComment);

module.exports = router;