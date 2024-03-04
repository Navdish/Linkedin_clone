const mongoose = require('mongoose')
const Users = require('./users');

const Room = mongoose.Schema({

    participants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: Users
    }]

})


const Rooms = mongoose.model('RoomModel', Room);
module.exports = Rooms;