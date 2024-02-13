const CustomError = require('../lib/error');
const model = require('../models');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const fetchComments = async ({post_id, time})=>{
    if(post_id && time){
        const responses = await model.Comment.find({post_id: post_id});
        if(!responses)
        {
            throw new CustomError("mmm", 500);
        }
        return responses;
    }
    throw new CustomError("details", 404);
}

const updateComments = async function() {
    
}

const postComments = async ({user_id, data}) => {
    const {body, post_id} = data;
    if(body && post_id){
        const response = await model.Comment.create({user_id , post_id, body});
        if(!response){
            throw new CustomError("comment not created", 500);
        }
        return response;
    }
    throw new CustomError("User credentials not found", 404);
}

const deleteComments = async () =>{

}

module.exports = {
    fetchComments,
    updateComments,
    postComments,
    deleteComments
}