const {Post} = require('../models');

exports.addPost = function(userId, title, body, photos){
    return Post.create({userId, title, body, photos});
}

exports.fetchPost = function(user_id) {
    return Post.find({userId : user_id}).exec();
}

exports.updatePost = function(post_id, post_details) {
    return Post.findById({post_id});

}

exports.deletePost = function(post_id) {
    return Post.deleteOne({_id : post_id});
}
