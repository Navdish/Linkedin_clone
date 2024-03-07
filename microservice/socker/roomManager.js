const {Server} = require("socket.io")

module.exports = async(server) => {
    const io = new Server (server, {
        cors : {
            origin: "http://localhost:3000",
            methods:["GET", "POST", "PUT"]
        },
    })
    io.on("connection", (socket)=> {
        console.log("connection on notification server : ", socket.id);
        // const users = {};
        // users[userId] = socket.id;



        
        // socket.emit([recievingusers])
        
        socket.on('disconnect', () => {
            console.log('Client disconnected');
          });
    })
};