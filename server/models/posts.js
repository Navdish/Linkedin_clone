const mongoose = require('mongoose');
const Users = require('./users');

const Post = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : Users
    },
    title : String,
    body : String,
    photos : [String]
})

const Posts =  mongoose.model('PostModel', Post);
module.exports = Posts;