const mongoose = require('mongoose');
const Users = require('./users');
const Posts = require('./posts');

const Comment = mongoose.Schema({
    userId : {
        type: String,
        ref: Users
    },
    postId : {
        type : String,
        ref: Posts
    },
    body: {
        type : String,
    },
    date: {
        type: Date,
        default: Date.now,
        require: false
    }
})
 
const Comments = mongoose.model('CommentModel', Comment);
module.exports = Comments