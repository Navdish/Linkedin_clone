const {postService} = require('../service');
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
const jwt = require("jsonwebtoken");


const add_posts = async function(req, res) {
    console.log("jwt details",req.user);
    const user_id = req.user.id;
    let entry = [];
    for(file of req.files){
        entry = [...entry, file.path];
    }
    console.log(entry);
    const {title, body} = req.body;
    console.log(title, body, jwt);
    try {
        const response = await postService.addPost(user_id, title, body, entry);
    } catch (error) {
        return res.status(400).json({message: 'Error recieved'});
    }
}

const fetch_posts = async function(req, res) {
    const user_id = req.user.id;
    try {
        const response = await service.postService.fetchPost(user_id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message: 'Error recieved'});
    }
}

const update_posts = async function(req, res) {
    const {post_id, post_details} = req.body;
    try {
        const response = await service.postService.updatePost(post_id, post_details);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({message: "unable to update"})
    }   
}

const remove_posts = async function(req, res) {
    //getting post_id from req
    const {post_id} = req.body;
    try {
        const response = await service.postService.deletePost(post_id);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({message : 'Unable to delete'})
    }
}

module.exports = {
    add_posts,
    fetch_posts,
    update_posts,
    remove_posts
}