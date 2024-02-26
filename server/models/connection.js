const mongoose = require('mongoose');
const Users = require('./users');

const Connection = mongoose.Schema({
    senderId : {
        type : String,
        ref : Users,
        require: true
    },
    recieverId : {
        type: String,
        ref : Users,
        require: true
    },
    status : {
        type: String,
        enum: ['PENDING', 'ACCEPTED', 'REJECTED', 'WITHDRAW'],
        default: 'PENDING'
    },
  
}, {timestamps: true} )

const Connections =  mongoose.model('ConnectionModel', Connection);
module.exports = Connections;