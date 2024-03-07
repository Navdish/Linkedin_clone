const {Server} = require("socket.io")
const {Message} = require('../models/index')

module.exports = async(server) => {
    const io = new Server (server, {
        cors : {
            origin: "http://localhost:3000",
            methods:["GET", "POST", "PUT"]
        },
    })
    io.on("connection", (socket)=> {
        console.log("connection on: ", socket.id);

        socket.on("join room", (roomId)=> {
            socket.join(roomId);
            console.log("Room ....", roomId)
        })

        socket.on("newMessage", async({message, roomId, senderId})=> {
            // console.log("room mem", io.sockets.adapter.rooms.get('65e6acca569e5649cb36ead7'))
            const messageData = await Message.create({roomId, content:message, sender: senderId});
            console.log(message, roomId, senderId, messageData, "-------response");
            io.in(roomId).emit('message',messageData);
        })

        
        socket.on('disconnect', () => {
            console.log('Client disconnected');
          });


          function zaTYZ() {

          }
    })
    // console.log("room members ", io.sockets.adapter.rooms.get('65e6acca569e5649cb36ead7'))
};