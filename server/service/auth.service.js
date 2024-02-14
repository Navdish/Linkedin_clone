const { User } = require('../models')
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const CustomError = require('../lib/error');

exports.createUser = async({data})=> {

    const {name, email, password} = data;
    if(name && email && password)
    {
        const user = await User.findOne({email}).exec();
        if(user)
        {
            throw new CustomError("email already exists", 409);
        }
        const hash = await bcrypt.hash(password, saltRounds);
        const response = await User.create({name, email, password : hash});
        return response;
    }
    throw new CustomError("User credentials not found", 422);
}

exports.login = async function({data}) {
    const {email, password} = data;
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
            throw new CustomError("User password is wrong", 401)
        }
        throw new CustomError("User doesn't exist", 404);
    }
    throw new CustomError("User credentials not found", 422);
}
