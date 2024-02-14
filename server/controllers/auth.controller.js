const {authService} = require('../service');

exports.create_user = async (req, res)=>{
    try {
      const user = await authService.createUser({data : req?.body})
      if(!user){
        throw new Error("User not created", 500);
      }
      res.status(200).json({message : "user added successfully"})
    }
    catch (error) {
      res.status(error?.code).json({message : error?.message});
    }
}

exports.login = async (req, res)=>{
    try {
      const user = await authService.login({data : req?.body});
      if(!user){
        throw new Error("Token not created", 500);
      }
      res.status(200).json(user);
    }
    catch(error) {
      res.status(error?.code).json({message : error?.message});
    }
}