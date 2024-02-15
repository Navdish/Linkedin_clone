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


router.post('/',upload, Auth.authenticateUser, postController.addPost)
router.get('/',Auth.authenticateUser, postController.fetchPost)
router.put('/', Auth.authenticateUser, postController.updatePost)
router.delete('/', Auth.authenticateUser, postController.removePost)

module.exports = router;