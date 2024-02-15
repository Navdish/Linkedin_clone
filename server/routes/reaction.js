const router = require('express').Router();
const { reactionController } = require('../controllers');
const {Auth} = require("../middleware/index");

router.get('/', Auth.authenticateUser, reactionController.fetchReaction);
router.post('/', Auth.authenticateUser, reactionController.postReaction);
router.put('/', Auth.authenticateUser, reactionController.updateReaction);
router.delete('/', Auth.authenticateUser, reactionController.deleteReaction);

module.exports = router;