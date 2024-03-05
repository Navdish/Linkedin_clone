const {Server} = require("socket.io")

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
        socket.on("newMessage", (message, roomId)=> {
            // save the message in the db, then ....
            console.log(message, roomId, "-------response");
            socket.in(roomId).broadcast.emit(message);
        })


    })
};