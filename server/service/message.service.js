const CustomError = require('../lib/error');
const {Room, User, Message} = require('../models');
var mongoose = require("mongoose");


exports.fetchMessages = async({userId, query})=> {
    const roomId = query.data;
    const messages = await Message.find({roomId});
    if(!messages) throw new CustomError("No messages exist for this room", 204);
    return messages;
}

