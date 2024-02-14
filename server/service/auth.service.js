const { User } = require('../models/reactions')
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.createUser = async function(req) {

    const {name, email, password} = req?.data;
    if(name && email && password)
    {
        const user = await User.findOne({email : email}).exec();
        if(user)
        {
            throw new CustomError("email already exists", 409);
        }
        const hash = await bcrypt.hash(password, saltRounds);
        const response = await User.create({name, email, password : hash});
        return response;
    }
    throw new CustomError("User credentials not found", 400);
}

exports.login = async function(req) {
    const {email, password} = req?.data;
    if(email && password)
    {
        const user = await User.findOne({email : email}).exec();
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
