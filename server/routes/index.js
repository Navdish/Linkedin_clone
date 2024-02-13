const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/', require('./user'));
router.use('/', require('./post'));
router.use('/', require('./comment'));

module.exports = router;