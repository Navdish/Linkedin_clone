const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://navdishjaggi:navdishjaggi@cluster0.3ruxk42.mongodb.net/")
    .then(console.log("Database connected"))
    .catch((error) => console.log(error));

module.exports = mongoose;