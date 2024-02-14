const router = require('express').Router();
const { commentController } = require('../controllers');
const {Auth} = require("../middleware/index");

router.get('/', Auth.authenticateUser, commentController.fetch_comments);
router.post('/', Auth.authenticateUser, commentController.post_comments);
router.put('/', Auth.authenticateUser, commentController.update_comments);
router.delete('/', Auth.authenticateUser, commentController.delete_comments);

module.exports = router;