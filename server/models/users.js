const mongoose = require('mongoose')

const User = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    address: {
        type: Object,
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            type: Object,
            lat: String,
            lng: String
        }
    },
    phone: String,
    website: String,
    company: {
        type: Object,
        name: String,
        catchPhrase: String,
        bs: String
    }
})




const Users =  mongoose.model('UserModel', User);
module.exports = Users;