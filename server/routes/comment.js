const router = require('express').Router();
const { commentController } = require('../controllers');
const {Auth} = require("../middleware/index");

router.get('/comments', Auth.authenticateUser, commentController.fetch_comments);
router.post('/comments', Auth.authenticateUser, commentController.post_comments);
router.put('/comments', Auth.authenticateUser, commentController.update_comments);
router.delete('/comments', Auth.authenticateUser, commentController.delete_comments);

module.exports = router;