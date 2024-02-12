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

module.exports = {
    fetch_user,
    createUser,
    find_user,
    updateUser
}