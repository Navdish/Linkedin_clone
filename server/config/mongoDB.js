const mongoose = require('mongoose');
require("dotenv").config();

// mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.3ruxk42.mongodb.net/`)
//     .then(console.log("Database connected"))
//     .catch((error) => console.log(error));


(function () {
    try {
        mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.3ruxk42.mongodb.net/`)
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
  })();