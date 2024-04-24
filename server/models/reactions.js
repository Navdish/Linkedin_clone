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
    },
    commentId: {
        type: String,
        ref: Comments,
    },
    type: { 
        type: String,
        require: true
    }
}, {timestamps: true} )

module.exports= mongoose.model("reactionmodel", Reaction)