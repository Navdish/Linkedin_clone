const mongoose = require('mongoose');
const Users = require('./users');
const Posts = require('./posts');

const Comment = mongoose.Schema({
    userId : {
        type: String,
        ref: Users,
        require: true
    },
    postId : {
        type : String,
        ref: Posts,
        require: true
    },
    body: {
        type : String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
        require: false
    }
})
 
const Comments = mongoose.model('CommentModel', Comment);
module.exports = Comments