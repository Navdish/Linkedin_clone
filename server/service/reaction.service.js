const CustomError = require('../lib/error');
const Reaction = require('../models/reactions')


exports.createReaction= async({userId, data})=>{
    const {type, postId} = data;
    if(type, postId) {
        const newReaction = await Reaction.create({userId:userId , postId:postId , type:type});
        if(!newReaction)
        {
            throw new CustomError("Reaction not created", 500);
        }
        return newReaction;
    }
    throw new CustomError("details not found", 404);
};

exports.getReaction = async({data})=>{
    const {postId} = data;
    if(postId) { 
        const response = await Reaction.find({postId : postId});
        if(!response)
        {
            throw new CustomError("Reaction not created", 500);
        }
        return response;
    }
    throw new CustomError("details not found", 404);
};

exports.updateReaction=async({userId, data})=>{
    const {reactionId, body} = data;
    if(reactionId && body)
    {
        const reaction= await Reaction.findById(reactionId);
        if(reaction){
            if(userId == reaction.userId){
                const response= await Reaction.findByIdAndUpdate(reactionId,{type:type});
                if(!response)
                {
                    throw new CustomError("Reaction not created", 500);
                }
                return response;
            }
        }
        throw new CustomError("reaction not found", 404);
    }
    throw new CustomError("details  not found", 404);
};

exports.deleteReaction=async({userId, data})=>{
    const {reactionId}= data;
    if(reactionId && userId){
        const reaction = Comment.findById(reactionId);
        if(reaction){
            if(userId == await reaction.userId){
                const delComment = await CommentModel.findByIdAndDelete(reactionId);
                return delComment;
            }
            throw new CustomError("Cannot delete reaction", 403);
        }
        throw new CustomError("Cannot find reaction", 404);
    }
    throw new CustomError("User credentials not found", 404);
};