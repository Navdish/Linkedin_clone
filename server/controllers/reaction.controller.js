const { reactionService } = require("../service");



exports.create_reaction = async(req,res)=>{
    try{
        const response = await reactionService.createReaction({user_id : req?.res?.id, data : req?.body});
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500 ).json(err)
    }
};


exports.fetch_reaction = async(req,res)=>{
    try{
        const response = await reactionService.getReaction({data : req?.body});
        return res.status(200).json(response)
    }
    catch(err){
        return  res.status(500).json(err);
    }
};

exports.delete_reaction = async(req,res)=>{
    try{
        const response = await reactionService.deleteReaction({data : req?.body, userId: req?.res?.id});
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500).json(err);
    }
};
exports.update_reaction = async(req,res)=>{
    try{
        const response = await reactionService.updateReaction({user_id : req?.res?.id,data : req?.body});
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500).json(err);
    }

};