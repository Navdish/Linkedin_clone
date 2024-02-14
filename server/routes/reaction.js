const router = require('express').Router();
const { reactionController } = require('../controllers');
const {Auth} = require("../middleware/index");

router.get('/reactions', Auth.authenticateUser, reactionController.fetch_reactions);
router.post('/reactions', Auth.authenticateUser, reactionController.post_reactions);
router.put('reactionss', Auth.authenticateUser, reactionController.update_reactions);
router.delete('reactionss', Auth.authenticateUser, reactionController.delete_reactions);

module.exports = router;