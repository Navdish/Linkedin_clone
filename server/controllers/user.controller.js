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
    // const user = await service.userService.find_user(jwt);
    // if(user)
    // {
    //     const new_user = await service.userService.createUser(name, email, hash);
    //     res.status(200);
    // }
    // else 
    // {
    //   return res.status(400).json({message :'something went wrong'});
    // }
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

module.exports = {
    // fetch_user,
    create_user,
    update_user,
    login
}