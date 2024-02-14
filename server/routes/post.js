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


router.post('/',upload, Auth.authenticateUser, postController.add_posts)
router.get('/',Auth.authenticateUser, postController.fetch_posts)
router.put('./', Auth.authenticateUser, postController.update_posts)
router.delete('./', Auth.authenticateUser, postController.remove_posts)

module.exports = router;