const CustomError = require('../lib/error');
const model = require('../models');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");


const createUser = async function(req) {

    const {name, email, password} = req?.data;
    if(name && email && password)
    {
        const user = await model.User.findOne({email : email}).exec();
        if(user)
        {
            throw new CustomError("email already exists", 409);
        }
        const hash = await bcrypt.hash(password, saltRounds);
        const response = await model.User.create({name, email, password : hash});
        return response;
    }
    throw new CustomError("User credentials not found", 400);
}


const updateUser = async function({id, req}) {
    const response = await model.User.findByIdAndUpdate(id, req);
    return response;
}

const login = async function(req) {
    const {email, password} = req?.data;
    if(email && password)
    {
        const user = await model.User.findOne({email : email}).exec();
        if(user)
        {
            if(bcrypt.compare(password, user.password))
            {
                const token = jwt.sign({id : user._id}, 'Zenmonk', {
                    expiresIn: '4h'
                })
                return token;
            }
        }
        throw new CustomError("User doesn't exist", 404);
    }
    throw new CustomError("User credentials not found", 404);
}

module.exports = {
    createUser,
    updateUser,
    login
}