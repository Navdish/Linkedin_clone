const router = require('express').Router();
const { reactionController } = require('../controllers');
const {Auth} = require("../middleware/index");

router.get('/', Auth.authenticateUser, reactionController.fetch_reaction);
router.post('/', Auth.authenticateUser, reactionController.post_reaction);
router.put('/', Auth.authenticateUser, reactionController.update_reaction);
router.delete('/', Auth.authenticateUser, reactionController.delete_reaction);

module.exports = router;