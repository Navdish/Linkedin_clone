const CustomError = require('../lib/error');
const {Room, User} = require('../models');
var mongoose = require("mongoose");


exports.createRoom = async({userId, payload})=> {
    const recieverId = payload._id;
    const reciever = await User.findById(recieverId);
    if(!reciever) throw new CustomError("User doesn't exist", 404);
    const participants = [(new mongoose.Types.ObjectId(userId)), (new mongoose.Types.ObjectId(recieverId))];
    console.log("participants : ", participants)
    const existedRoom = await Room.findOne({participants}).populate({path: 'participants',}); /// Give a check 
    console.log("existedRoom",existedRoom);
    if(existedRoom && existedRoom.length !== 0) return existedRoom;
    const room = await Room.create({participants});
    if(!room) throw new CustomError("Room not created", 500);
    console.log("room ",room);
    return room.populate({path: 'participants',});
}

