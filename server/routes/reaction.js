const router = require('express').Router();
const { reactionController } = require('../controllers');

router.get('/', reactionController.fetchReaction);
router.post('/', reactionController.postReaction);
router.put('/', reactionController.updateReaction);
router.delete('/', reactionController.deleteReaction);

module.exports = router;