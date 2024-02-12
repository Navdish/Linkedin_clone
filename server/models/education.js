const mongoose = require('mongoose')

const Education = mongoose.Schema({
    user_id : String,
    name: String,
    degree: String,
    field_of_study: String,
    start_date: Date,
    end_date: Date,
    grade: String,
    description: String
})

const Educations =  mongoose.model('EducationModel', Education);
module.exports = Educations;