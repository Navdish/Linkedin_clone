const {userService} = require('../service');

exports.update_user = async(req, res)=> {
    try {
        const user = await userService.updateUser({user_id : req?.user?.id, data : req?.query});
        res.status(200).json({message : 'user updated successfully'})
    }
    catch(error) {
        res.status(error?.code).json({message : error?.message});
    }
}
