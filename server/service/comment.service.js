const CustomError = require('../lib/error');
const {Comment, Reaction} = require('../models');

exports.fetchComments = async ({query})=>{
    console.log("query", query)
    const {postId, date} = query.data;
    if(!(postId && date)) throw new CustomError("details not found", 404);
    // Date: { $gte: (new Date(date)) }
    const responses = await Comment.find({postId}).sort({Date :1}).limit(3).populate("userId", ["name", "description"]);
    // function ko call kruga 
    if(!responses) throw new CustomError("Comments not found", 500);    
    return responses;
}

exports.updateComments = async function({userId,data, params}) {
    const {commentId} = params;
    const {body} = data;
    if(!(commentId && body)) throw new CustomError("details  not found", 404);
    const comment= await Comment.findById(commentId);
    if(!comment)throw new CustomError("Comment not found", 404);
    if(userId !== comment.userId) throw new CustomError("user not authorized to change comment", 401);
    if(body.postId !== comment.postId) throw new CustomError("bad request, user not authorized to change postId of comment", 400);
    const updateComment= await Comment.findByIdAndUpdate(commentId,body);
    return updateComment;            
}

exports.postComments = async ({userId, data}) => {
    const {body, postId} = data;
    if(!(body && postId)) throw new CustomError("User credentials not found", 404);
    const response = await Comment.create({userId , postId, body});

    
    if(!response) throw new CustomError("comment not created", 500);
    return response.populate("userId", ["name", "description"]);    
}

exports.deleteComments = async ({params, userId}) =>{
    const {commentId} = params;
    if(!(commentId && userId)) throw new CustomError("Details not found", 404);
    const comment = await Comment.findById(commentId);
    if(!comment) throw new CustomError("Cannot find Comment", 404);
    if(userId !== comment.userId) throw new CustomError("Cannot delete Comment", 403);
    const delComment = await Comment.findByIdAndDelete(commentId);
    const delReaction = await Reaction.deleteMany({commentId});
    return delComment;
}

