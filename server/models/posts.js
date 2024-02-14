const mongoose = require('mongoose');
const Users = require('./users');

const Post = mongoose.Schema({
    userId : {
        type : String,
        ref : Users
    },
    title : String,
    body : String,
    photos : [String]
})

const Posts =  mongoose.model('PostModel', Post);
module.exports = Posts;