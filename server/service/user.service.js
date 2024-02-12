const model = require('../models');

const fetch_user = function() {
    return model.User.findOne();
}

const createUser = function(name, email, password) {
    console.log("entered service");
    return  model.User.create({name, email, password});
}

const find_user = function(email) {
    return model.User.findOne({email})
}

const updateUser = function(id, req ) {
    console.log(req);
    return model.User.findByIdAndUpdate(id, req);
}

const addPost = function(userId, title, body, photos){
    return model.Post.create({userId, title, body, photos});
}

const fetchPost = function(user_id) {
    return model.Post.find({userId : user_id}).exec();
}

module.exports = {
    fetch_user,
    createUser,
    find_user,
    updateUser,
    addPost,
    fetchPost
}