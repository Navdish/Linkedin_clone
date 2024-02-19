const express = require('express');
const cors = require('cors');
require("dotenv").config();
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// app.use(express.json);


const mongoose = require('./config/mongoDB');
app.use("/", require("./routes"));


app.listen(process.env.PORT, function () {
    console.log(`server running at ${process.env.PORT}`);
})

