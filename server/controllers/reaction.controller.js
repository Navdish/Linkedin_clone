const { reactionService } = require("../service");

exports.postReaction = async(req,res)=>{
    try{
        const response = await reactionService.createReactions({user_id : req?.res?.id, data : req?.body});
        return res.status(200).json(response);
    }
    catch(error){
        res.status(error?.code).json({message : error?.message});
    }
};

exports.fetchReaction = async(req,res)=>{
    try{
        const response = await reactionService.getReactions({query : req?.query});
        return res.status(200).json(response)
    }
    catch(error){
        res.status(error?.code).json({message : error?.message});
    }
};

exports.deleteReaction = async(req,res)=>{
    try{
        const response = await reactionService.deleteReactions({data : req?.body, userId: req?.res?.id});
        return res.status(200).json(response);
    }
    catch(error){
        res.status(error?.code).json({message : error?.message});
    }
};
exports.updateReaction = async(req,res)=>{
    try{
        const response = await reactionService.updateReactions({user_id : req?.res?.id, params: req?.params});
        return res.status(200).json(response);
    }
    catch(error){
        res.status(error?.code).json({message : error?.message});
    }
};