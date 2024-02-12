const mongoose = require('mongoose')

const Experience = mongoose.Schema({
    user_id : String,
    title: String,
    employee_type: String,
    company_name: String,
    location: String,
    location_type: String,
    start_date: Date,
    end_date : Date,
    currently_working: Boolean,
    description: String
})

const Experiences =  mongoose.model('ExperienceModel', Experience);
module.exports = Experiences;