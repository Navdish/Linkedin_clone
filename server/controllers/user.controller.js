const {userService} = require('../service');

exports.update_user = async(req, res)=> {
    try {
        const user = await userService.updateUser({user_id : req?.user?.id, data : req?.body});
        res.status(200).json({message : 'user updated successfully'})
    }
    catch {
        return res.status(404).json({messgae : 'user details not found'});
    }
}
