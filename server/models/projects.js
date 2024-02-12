const mongoose = require('mongoose')

const Project = mongoose.Schema({
    user_id : String,
    name: String,
    description: String,
    skill: String,
    start_date: Date,
    end_date: Date,
    link_of_project : String
})

const Projects =  mongoose.model('ProjectModel', Project);
module.exports = Projects;