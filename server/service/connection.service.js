const CustomError = require('../lib/error');
const {Connection, User} = require('../models');

exports.fetchUsers = async ({userId})=>{
    const pending = await Connection.find({ $or: [ { senderId: userId }, { recieverId: userId } ]}); 
    // ignoring certain cases, if senderId and recieverId are same (POSTMAN), or the case of dupliactes (POSTMAN)
   

    const result = pending.map(connect => connect.senderId == userId ? connect.recieverId : connect.senderId)
    const responses = await User.find({ _id : { $nin: [...result, userId] } });
    if(!responses) throw new CustomError("Suggestions not found", 500);    
    return responses;
}

exports.fetchRequests = async ({userId}) => {
    const response = await Connection.find({recieverId: userId, status: 'PENDING'}).populate("senderId", ["name", "description"]);
    console.log(response, userId);
    if(!response) throw new CustomError("No requests found", 404);
    return response;
}

exports.fetchConnections = async ({userId}) => {
    const response = await Connection.find({ $or: [ { senderId: userId }, { recieverId: userId } ] , status: 'ACCEPTED'});
    if(!response) throw new CustomError("No connections found", 404);
    return response;
}

exports.postConnection = async ({userId, payload}) => {
    // Ignoring certain cases, Connection doesn't exist previously and user is not sending the status in payload, and sender and reciever are not same
    const {recieverId, status} = payload;
    console.log(recieverId, userId);
    if(status) throw new CustomError("Bad request", 400);
    const user = await User.find({_id : recieverId});
    if(!user) throw new CustomError("Recieving User doesn't exist anymore", 404);
    if(recieverId === userId) throw new CustomError("Bad request", 400);
    const connection = await Connection.findOne({ $or: [ { senderId: recieverId, userId }, { recieverId: userId, recieverId }]});
    if(!connection){
        const response = await Connection.create({senderId: userId, recieverId});
        if(!response) throw new CustomError("Connection not created", 500);
        console.log(response);
        return response;
    } 
    if(connection.status !== 'WITHDRAW') throw new CustomError("Connection/request already exists ", 409);
    if((new Date()).getTime() - connection.updatedAt.getTime() <= 1855058823) throw new CustomError("Can't send the request before 3 weeks from withdrawing ", 409); 
    const response = await Connection.findByIdAndUpdate(connection._id, {status: 'PENDING'}, {new: true})
    return response;
}

exports.updateConnection = async({userId, query}) => {
    const {connectionId, status} = query;
    const connection = await Connection.findById(connectionId);
    if(!connection) throw new CustomError("Connection not found ", 404);
    if(connection.senderId !== userId && connection.recieverId !== userId) throw new CustomError("Bad request", 400);
    if(status === 'WITHDRAW' ){
        if(connection.senderId !== userId) throw new CustomError("Reciever not authorized to withdraw ", 400);
        if(connection.status !== 'PENDING') throw new CustomError("This status can't be changed", 400);
        const response = await Connection.findByIdAndUpdate(connectionId, status, {new : true});
        if(!response) throw new CustomError("Internal Server error", 500);
        return response;
    }
    if(connection.recieverId !== userId) throw new CustomError("Not authorized ", 403);
    // update only if the sender 
    const response = await Connection.findByIdAndUpdate(connectionId, {status}, {new : true});
    if(!response) throw new CustomError("Internal Server error", 500);
    return response;
}   

// to fetch the status of the request upon searching the user...
// if status is PENDING or REJECTED show the user 'PENDING'


// to withdraw the request... , upon withdrawal request not transmitted till 3 weeks
exports.deleteConnection = async ({userId, payload}) => {
    const {connectionId} = payload;
    console.log(connectionId);
    const connection = await Connection.findById(connectionId);
    if(!connection) throw new CustomError("Connection doesn't exist", 404);
    if(connection.senderId !== userId && connection.recieverId !== userId) throw new CustomError("Bad request", 400);
    if(connection.status !== 'ACCEPTED') throw new CustomError("Requests can't be deleted", 400);
    const response = await Connection.deleteOne({_id : connectionId});
    if(!response) throw new CustomError("Not able to delete", 500);
    return response;
}

// code-15  65d45b4217968a775dd4b373
// code-16 65dc689676b1e9ff6c07def8
// code-17 65dc6a8f866bf62abb805a23
// code-18 65dc6ac218d457961bd4af43 // post checked

// connection id 18->15 65dc6af63b4346588d2b33e0    18- 16
// 16 - 15
// connection 16->15, 18->15
// for query of 15
// user --- 17
// requests --- 16
// connection --- 18

// response after deletion {
//     "acknowledged": true,
//     "deletedCount": 1
// }