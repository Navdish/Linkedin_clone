const router = require('express').Router()

router.use('/notification', require('./notification'))

module.exports = router;