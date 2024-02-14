const router = require('express').Router();
const { reactionController } = require('../controllers');
const {Auth} = require("../middleware/index");

router.get('/reactions', Auth.authenticateUser, reactionController.fetch_reaction);
router.post('/reactions', Auth.authenticateUser, reactionController.post_reaction);
router.put('/reactions', Auth.authenticateUser, reactionController.update_reaction);
router.delete('/reactions', Auth.authenticateUser, reactionController.delete_reaction);

module.exports = router;