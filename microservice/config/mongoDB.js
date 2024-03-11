const mongoose = require('mongoose');




(async ()=>  {
    try {
        await mongoose.connect(`mongodb+srv://navdishjaggi:navdishjaggi@cluster0.ewsycva.mongodb.net/`)
        console.log("DB 2 connected");
    } catch (error) {
        console.log(error);
    }
  })();