const { authenticateUser } = require('../middleware/Auth');

const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use(authenticateUser);
router.use('/users', require('./user'));
router.use('/posts', require('./post'));
router.use('/comments', require('./comment'));
router.use('/reactions', require('./reaction'));
router.use('/connection', require('./connection'));

module.exports = router;