const {Server} = require("socket.io")
const {Message} = require('../models/index')

module.exports = async(server) => {
    const io = new Server (server, {
        cors : {
            origin: "http://localhost:3000",
        },
    })
    io.on("connection", (socket)=> {
        console.log("connection on: ", socket.id);

        socket.on("join room", (roomId)=> {
            socket.join(roomId);
            console.log("Room ....", roomId)
        })

        socket.on("newMessage", async({message, roomId, senderId})=> {
            // save the message in the db, then ....
            const messageData = await Message.create({roomId, content:message, sender: senderId});
            console.log(message, roomId, senderId, messageData, "-------response");
            socket.in(roomId).emit('message',messageData);
        })

        socket.on('disconnect', () => {
            console.log('Client disconnected');
          });
    })
};