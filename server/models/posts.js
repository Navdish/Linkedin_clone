const mongoose = require('mongoose')

const Post = mongoose.Schema({
    userId : String,
    title : String,
    body : String,
    photos : [String]
})

const Posts =  mongoose.model('PostModel', Post);
module.exports = Posts;