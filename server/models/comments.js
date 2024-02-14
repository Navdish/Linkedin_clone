const mongoose = require('mongoose');
const Users = require('./users');
const Posts = require('./posts');

const Comment = mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users
    },
    post_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: Posts
    },
    body: {
        type : String,
    },
    Date: {
        type: Date,
        default: Date.now,
        require: false
    }
})
 
const Comments = mongoose.model('CommentModel', Comment);
module.exports = Comments