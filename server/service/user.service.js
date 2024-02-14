const CustomError = require('../lib/error');
const {User} = require('../models');


exports.updateUser = async function({user_id, req}) {
    const user = await User.findById(user_id);
    if(user){
        if(user._id === id){
            const response = await User.findByIdAndUpdate(user_id, req);
            if(!response)
            {
                throw new CustomError("Updation failed", 500);
            }
            return response;
        }
        throw new CustomError("Not authorized to change this user", 403);
    }
    return response;
}

