const CustomError = require('../lib/error');
const {Room, User} = require('../models');


exports.createRoom = async({userId, payload})=> {
    const recieverId = payload._id;
    const reciever = await User.findById(recieverId);
    if(!reciever) throw new CustomError("User doesn't exist", 404);
    const participants = [userId, recieverId];
    const existedRoom = await Room.find({participants}).populate("participants", ["name", "description"]); ; /// Give a check 
    console.log("existedRoom",existedRoom);
    if(existedRoom) return existedRoom;
    const room = await Room.create({participants});
    if(!room) throw new CustomError("Room not created", 500);
    console.log("room ",room);
    return room.populate("participants", ["name", "description"]); 
}

