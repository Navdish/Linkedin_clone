const CustomError = require('../lib/error');
const {Room, User} = require('../models');
var mongoose = require("mongoose");


exports.createRoom = async({userId, payload})=> {
    const recieverId = payload._id;
    const reciever = await User.findById(recieverId);
    if(!reciever) throw new CustomError("User doesn't exist", 404);
    const participants = [(new mongoose.Types.ObjectId(userId)), (new mongoose.Types.ObjectId(recieverId))]; //.filter(res => res !== (new mongoose.Types.ObjectId(userId)))
    const existedRoom = await Room.findOne({participants : {$all : participants}}).populate('participants'); /// Give a check 
    if(existedRoom && existedRoom.length !== 0) throw new CustomError('Conflict, room already exists', 409);
    const room = await Room.create({participants});
    if(!room) throw new CustomError("Room not created", 500);
    return room.populate({path: 'participants'});
}

exports.getRoom = async({userId})=> {
    console.log("get room", userId)
    const response = await Room.find({participants : userId}).populate('participants' );
    if(!response) throw new CustomError("No rooms found", 204);
    return response;
}