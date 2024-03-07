const express = require('express');
const cors = require('cors');
const http = require('http')

const app = express();
const server = new http.createServer(app);
app.use(cors());
app.use(express.json());
require('./socker/roomManager')(server);

require('./config/mongoDB');
app.use("/", require("./routes"));

server.listen(4000, function () {
    console.log(`server running at 4000`);
})