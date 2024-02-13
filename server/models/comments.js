const mongoose = require('mongoose')

const Comment = mongoose.Schema({
    user_id : String,
    post_id : String,
    body: String,
    Date: {
        type: Date,
        default: Date.now,
        required: false
    }
})

// const Comments =  
module.exports = mongoose.model('CommentModel', Comment);