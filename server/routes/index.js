const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/users', require('./user'));
router.use('/posts', require('./post'));
router.use('/comments', require('./comment'));
router.use('/reactions', require('./reaction'));

module.exports = router;