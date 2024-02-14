const mongoose = require('mongoose');
const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./comments');

const Reaction = mongoose.Schema({
    userId: {
        type: String,
        ref: Users,
    },
    postId: {
        type: String,
        ref: Posts,
    },
    commentId: {
        type: String,
        ref: Comments,
    },
    type: { 
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: false
    },
})

module.exports= mongoose.model("reactionmodel", Reaction)