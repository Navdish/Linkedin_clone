const CustomError = require('../lib/error');
const {userService} = require('../service');

exports.modifiedUser = async(req, res)=> {
    try {
        console.log('req?.user?.id: ', req?.user?.id);
        const user = await userService.updateUser({userId : req?.user?.id, data : req?.body});
        res.status(200).json({message : 'user updated successfully'})
    }
    catch(error) {
        res.status(error?.code).json({message : error?.message});
    }
}
