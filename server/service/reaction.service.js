const CustomError = require('../lib/error');
const Reaction = require('../models/reactions');
const axios = require('axios')


exports.createReactions= async({userId, data})=>{
    const {type, postId, commentId} = data;
    if(!type) throw new CustomError("details not found", 404);
    const id = postId ? postId : commentId;

    if(!id) throw new CustomError("Parent Id not sent", 400);
    const reaction = await Reaction.findOne({postId:id, userId});
    if(reaction){
        if(reaction.type === type) {
            const deletedResponse = await Reaction.findByIdAndDelete(reaction._id);
            return deletedResponse;
        }
        const response= await Reaction.findByIdAndUpdate(reaction._id,{type},{new: true});
        if(!response) throw new CustomError("Reaction not created", 500);
        return response; 
    }
    const response2 = await Reaction.create({userId , postId, commentId , type});
    // send the response2 to notification server// we got userId, content and the receiver is found after populating the postId with the field name
    console.log("Sending the notification to the notification server");
    if(id === postId) await response2.populate('postId', 'userId');
    else await response2.populate('commentId', 'userId');
    await response2.populate('userId', 'name');
    
    console.log("----------", response2);
    const dataObj = {
        notificationType: 'REACTION',
        receiver: response2.postId ?[response2.postId.userId]: [response2.commentId.userId],
        sender: userId,
        content: response2
    }
    const notificationResponse = await axios.post("http://localhost:4000/notification", dataObj);
    console.log("got back")
    if(!response2) throw new CustomError("Reaction not created", 500);
    return response2;
};

exports.userReactions = async({userId, query})=> {
    const {postId} = query;
    if(!postId) throw new CustomError("postId not found", 404);
    const response = await Reaction.findOne({postId, userId});
    if(!response) throw new CustomError("Reaction doesn't exist for this post", 404);
    return response;  
};

exports.getReactions = async({query})=>{
    const {postId, commentId} = query;
    if(!(postId || commentId )) throw new CustomError("details not found", 404);
    console.log(commentId);
    if(postId) {
        const response = await Reaction.find({postId}).populate("userId", ["name", "description"]);
        if(!response) throw new CustomError("Reaction not created", 500);
    return response;    
    }
    if(commentId) {
        const response = await Reaction.find({commentId}).populate("userId", ["name", "description"]);
        if(!response) throw new CustomError("Reaction not created", 500);
    return response;    
    }
    
};

exports.updateReactions=async({userId, data, params})=>{
    const { type, commentId, postId} = data;
    const { reactionId} = params;
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
    const response= await Reaction.findByIdAndUpdate(reactionId,{type},{new: true});
    if(!response) throw new CustomError("Reaction not created", 500);
    return response;        
};

exports.deleteReactions=async({userId, params})=>{
    const {reactionId}= params;
    if(!(reactionId && userId)) throw new CustomError("User credentials not found", 404);
    const reaction = Reaction.findById(reactionId);
    if(!reaction) throw new CustomError("Cannot find reaction", 404);
    if(userId !== reaction.userId) throw new CustomError("Cannot delete reaction", 403);
    const delComment = await Reaction.findByIdAndDelete(reactionId);
    return delComment;
};