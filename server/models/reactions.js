const mongoose = require('mongoose');
const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./comments');

const Reaction = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Posts,
    },
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Comments,
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