const CustomError = require('../lib/error');
const {roomService} = require('../service');

exports.addRoom = async(req, res)=>{
    try{
        const response = await roomService.createRoom({userId : req?.user?.id, payload : req?.body});
        return res.status(200).json(response);
    }
    catch(error){
        res.status(error?.code).json({message : error?.message});
    }
}

exports.fetchRoom = async(req, res)=> {
    try {
        const response = await roomService.getRoom({userId : req?.user?.id});
        console.log(response, "response of fetching ...");
        return res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}