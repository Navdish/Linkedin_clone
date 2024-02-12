const router = require('express').Router();
const { userController } = require('../controllers');
const {Auth} = require("../middleware/index");
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination : function(req, file, cb)
        {
            cb(null, "uploads")
        },
        filename : function(req, file, cb)
        {
            cb(null,  Date.now() + "-" + file.originalname)
        }
    })
}).array("user_file");
// router.get('/users', Auth.authenticateUser ,userController.fetch_user)
router.post('/signup', userController.create_user)
router.post('/login', userController.login)
router.put('/users', Auth.authenticateUser, userController.update_user)
router.post('/posts',upload, Auth.authenticateUser, userController.add_posts)
router.get('/posts',Auth.authenticateUser, userController.fetch_posts)
// router.post('/posts', Auth.authenticateUser, )

module.exports = router;