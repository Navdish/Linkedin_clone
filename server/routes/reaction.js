const router = require('express').Router();
const { reactionController } = require('../controllers');

router.get('/', reactionController.fetchReaction);
router.post('/', reactionController.postReaction);
router.put('/:reactionId', reactionController.updateReaction);
router.delete('/:reactionId', reactionController.deleteReaction);

module.exports = router;