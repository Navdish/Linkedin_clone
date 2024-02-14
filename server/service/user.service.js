const CustomError = require('../lib/error');
const {User} = require('../models');


exports.updateUser = async({user_id, data})=> {
    const user = await User.findById(user_id);
    if(user){
        if(String(user._id) === user_id){
            const response = await User.findByIdAndUpdate(user_id, {data});
            if(!response)
            {
                throw new CustomError("Updation failed", 500);
            }
            return response;
        }
        throw new CustomError("Not authorized to change this user", 401);
    }
    throw new CustomError("User not found", 404);
}

