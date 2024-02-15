const CustomError = require('../lib/error');
const Reaction = require('../models/reactions')


exports.createReactions= async({userId, data})=>{
    const {type, postId} = data;
    if(!(type && postId)) throw new CustomError("details not found", 404);
    const response = await Reaction.create({userId:userId , postId:postId , type:type});
    if(!response) throw new CustomError("Reaction not created", 500);
    return response;
};

exports.getReactions = async({query})=>{
    const {postId} = query;
    if(!(postId )) throw new CustomError("details not found", 404);
    const response = await Reaction.find({postId});
    if(!response) throw new CustomError("Reaction not created", 500);
    return response;    
};

exports.updateReactions=async({userId, data})=>{
    const {reactionId, type, commentId, postId} = data;
    if(!(reactionId && type)) throw new CustomError("details  not found", 404);
    const reaction= await Reaction.findById(reactionId);
    if(!(reaction && reaction.type)) throw new CustomError("reaction not found", 404);
    if(userId !== reaction.userId) throw new CustomError("User not authorised to change reaction", 401)
    if( reaction.commentId !== commentId) throw new CustomError("Bad request, can't change commentId ", 400) 
    if( reaction.postId !== postId) throw new CustomError("Bad request, can't change postId ", 400) 
    if(type === reaction.type) //reactionController.delete_reaction();// delete reaction
    {
        const delComment = await Reaction.findByIdAndDelete(reaction._id);
        return delComment;
    }
    const response= await Reaction.findByIdAndUpdate(reactionId,{type});
    if(!response) throw new CustomError("Reaction not created", 500);
    return response;        
};

exports.deleteReactions=async({userId, data})=>{
    const {reactionId}= data;
    if(!(reactionId && userId)) throw new CustomError("User credentials not found", 404);
    const reaction = Reaction.findById(reactionId);
    if(!reaction) throw new CustomError("Cannot find reaction", 404);
    if(userId !== reaction.userId) throw new CustomError("Cannot delete reaction", 403);
    const delComment = await Reaction.findByIdAndDelete(reactionId);
    return delComment;
};