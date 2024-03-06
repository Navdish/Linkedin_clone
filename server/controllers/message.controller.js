const CustomError = require('../lib/error');
const {messageService} = require('../service');

exports.fetchMessage = async(req, res)=> {
    try {
        const response = await messageService.fetchMessages({userId : req?.user?.id, query : req?.query});
        if(!response) throw new CustomError("Internal server error", 500)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}