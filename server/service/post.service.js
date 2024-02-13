const model = require('../models');

const addPost = function(userId, title, body, photos){
    return model.Post.create({userId, title, body, photos});
}

const fetchPost = function(user_id) {
    return model.Post.find({userId : user_id}).exec();
}

const updatePost = function(post_id, post_details) {
    return model.Post.findById({post_id});

}

const deletePost = function(post_id) {
    return model.Post.deleteOne({_id : post_id});
}

module.exports = {
    addPost,
    fetchPost,
    updatePost,
    deletePost
}