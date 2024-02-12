const express = require('express');
const cors = require('cors');
// require("dotenv").config();
// const Users = require('./models/users');
// const mongoose = require('mongoose')
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// app.use(express.json);


const mongoose = require('./config/mongoDB');
app.use("/", require("./routes"));


app.listen('8080', function () {
    console.log("server running at 8080");
})


// const {name, username, email, address, phone, website, company} = req.body;
    // const {street, suite, city, zipcode, geo}= address;
    // const {lat, lng} = geo;
    // const {companyname, catchPhrase, bs} = company;