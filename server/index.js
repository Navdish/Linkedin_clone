const express = require('express');
const cors = require('cors');
// require("dotenv").config();
// const Users = require('./models/users');
// const mongoose = require('mongoose')


const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('./config/mongoDB');
app.use("/", require("./routes"));


// mongoose.connect("mongodb+srv://navdishjaggi:navdishjaggi@cluster0.idim6q8.mongodb.net/")
//     .then(console.log("Database connected"))
//     .catch((error) => console.log(error));

// app.get('/users',async function(req, res){
//     const response = await Users.find();
//     res.status(200).json(response);
// })

// app.post('/users', async function(req, res){
//     console.log(req.body);
//     const body = req.body;
//     const inp = new Users(body);
//     await inp.save();
//     // await Users.create(body);
//     res.status(200);
// })


app.listen('8080', function () {
    console.log("server running at 8080");
})


// const {name, username, email, address, phone, website, company} = req.body;
    // const {street, suite, city, zipcode, geo}= address;
    // const {lat, lng} = geo;
    // const {companyname, catchPhrase, bs} = company;