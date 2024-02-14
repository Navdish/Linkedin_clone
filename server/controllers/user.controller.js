const service = require('../service');

// const create_user = async function(req, res){
//     try {
//       const user = await service.userService.createUser({data : req?.body})
//       if(!user){
//         throw new Error("User not created", 500);
//       }
//       res.status(200).json({message : "user added successfully"})
//     }
//     catch (error) {
//       res.status(error?.code).json({message : error?.message});
//     }
// }

exports.update_user = async function(req, res) {
    try {
        const user = await service.userService.updateUser({jwt : req?.user?.id, data : req?.body});
        res.status(200).json({message : 'user updated successfully'})
    }
    catch {
        return res.status(404).json({messgae : 'user details not found'});
    }
}

// const login = async function(req, res){
//     try {
//       const user = await service.userService.login({data : req?.body});
//       if(!user){
//         throw new Error("Token not created", 500);
//       }
//       res.status(200).json(user);
//     }
//     catch(error) {
//       res.status(error?.code).json({message : error?.message});
//     }
// }

// module.exports = {
//     create_user,
//     update_user,
//     login,
// }