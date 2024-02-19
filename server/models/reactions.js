const mongoose = require('mongoose');
const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./comments');

const Reaction = mongoose.Schema({
    userId: {
        type: String,
        ref: Users,
        require: true
    },
    postId: {
        type: String,
        ref: Posts,
        require: true
    },
    commentId: {
        type: String,
        ref: Comments,
        require: true
    },
    type: { 
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
        require: false
    },
})

module.exports= mongoose.model("reactionmodel", Reaction)