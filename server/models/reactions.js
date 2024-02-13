const mongoose = require('mongoose');

const Reaction = mongoose.Schema({
    user_id : String,
    post_id : String,
})

module.exports= mongoose.model("reactionmodel", Reaction)