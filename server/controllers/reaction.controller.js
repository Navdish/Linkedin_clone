const { reactionService } = require("../service");

exports.post_reaction = async(req,res)=>{
    try{
        const response = await reactionService.createReaction({user_id : req?.res?.id, data : req?.body});
        return res.status(200).json(response);
    }
    catch(error){
        res.status(error?.code).json({message : error?.message});
    }
};

exports.fetch_reaction = async(req,res)=>{
    try{
        const response = await reactionService.getReaction({data : req?.body});
        return res.status(200).json(response)
    }
    catch(error){
        res.status(error?.code).json({message : error?.message});
    }
};

exports.delete_reaction = async(req,res)=>{
    try{
        const response = await reactionService.deleteReaction({data : req?.body, userId: req?.res?.id});
        return res.status(200).json(response);
    }
    catch(error){
        res.status(error?.code).json({message : error?.message});
    }
};
exports.update_reaction = async(req,res)=>{
    try{
        const response = await reactionService.updateReaction({user_id : req?.res?.id,data : req?.body});
        return res.status(200).json(response);
    }
    catch(error){
        res.status(error?.code).json({message : error?.message});
    }
};