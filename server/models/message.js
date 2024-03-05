const mongoose = require('mongoose')
const Users = require('./users');
const Room = require('./room')

const Message = mongoose.Schema({

    roomId : {
        type:  mongoose.Schema.Types.ObjectId,
        ref: Room
    },
    content: String,
    sender: mongoose.Schema.Types.ObjectId

} ,{timestamps: true} )


const Messages = mongoose.model('MessageModel', Message);
module.exports = Messages;