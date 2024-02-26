const router = require('express').Router();
const { connectionController } = require('../controllers');

router.get('/', connectionController.fetchConnections);
router.get('/user', connectionController.fetchUsers);
router.get('/request', connectionController.fetchRequests);
router.post('/',  connectionController.postConnection);
router.put('/',  connectionController.updateConnection);
router.delete('/',  connectionController.deleteConnection);

module.exports = router;