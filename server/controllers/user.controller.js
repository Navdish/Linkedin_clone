const service = require('../service');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");



// const fetch_user = async function(req, res){
//     console.log("jwt details",req.res.user);
//     const jwt = req.res.user;
//     // const response = await service.userService.fetch_user();
//     // res.status(200).json(response);
// }

// const add_posts = async function(req, res) {

// }

const create_user = async function(req, res){
    console.log(req.body);
    
    const {name, email, password} = req.body;

    const user = await service.userService.find_user(email);
  
    if(user)
    {
      return res.status(400).json({message :'something went wrong'});
    }
    else 
    {
      const hash = await bcrypt.hash(password, saltRounds);
      console.log(hash);
      const new_user = await service.userService.createUser(name, email, hash);
      res.status(200);
    }
}

const update_user = async function(req, res) {
    console.log("jwt details",req.user);
    const jwt = req.user.id;
    
    try {
        const user = await service.userService.updateUser(jwt, req.body);
    }
    catch {
        return res.status(404).json({messgae : 'user details not found'});
    }
}

const login = async function(req, res){
    console.log(req.body);
    const {email, password} = req.body;
  
    const user = await service.userService.find_user(email);
    console.log("user",user);
    if(user)
    {
      if(bcrypt.compare(password, user.password))
      {
        const token = jwt.sign({id : user._id}, 'Zenmonk', {
            expiresIn: '4h'
        })
        return res.status(200).json(token);
      }
    }
    return res.status(400).json({message :'No user found with such credentials'});
}

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
        const response = await service.userService.addPost(user_id, title, body, entry);
    } catch (error) {
        return res.status(400).json({message: 'added successfully'});
    }
}

const fetch_posts = async function(req, res) {
    const user_id = req.user.id;
    try {
        const response = await service.userService.fetchPost(user_id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).error(error);
    }
}

module.exports = {
    // fetch_user,
    create_user,
    update_user,
    login,
    add_posts,
    fetch_posts
}