const router = require('express').Router();
const { postController } = require('../controllers');
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


router.post('/posts',upload, Auth.authenticateUser, postController.add_posts)
router.get('/posts',Auth.authenticateUser, postController.fetch_posts)
router.put('./posts', Auth.authenticateUser, postController.update_posts)
router.delete('./posts', Auth.authenticateUser, postController.remove_posts)

module.exports = router;