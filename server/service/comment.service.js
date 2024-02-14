const CustomError = require('../lib/error');
const model = require('../models');

exports.fetchComments = async ({post_id, time})=>{
    if(post_id && time){
        const responses = await model.Comment.find({post_id: post_id, Date: { $gte: (new Date(time)) }}).sort({Date :-1}).limit(5);
        if(!responses)
        {
            throw new CustomError("Comments not found", 500);
        }
        return responses;
    }
    throw new CustomError("details not found", 404);
}

exports.updateComments = async function({userId,data}) {
    const {commentId, body} = data;
    if(commentId && body)
    {
        const comment= await CommentModel.findById(commentId);
        if(comment){
            if(userId == comment.user_id){
                const updateComment= await CommentModel.findByIdAndUpdate(commentId,{body:body}, {new:true});
                return updateComment;
            }
        }
        throw new CustomError("Comment not found", 404);
    }
    throw new CustomError("details  not found", 404);
}

exports.postComments = async ({user_id, data}) => {
    const {body, post_id} = data;
    if(body && post_id){
        const response = await model.Comment.create({user_id , post_id, body});
        if(!response){
            throw new CustomError("comment not created", 500);
        }
        return response;
    }
    throw new CustomError("User credentials not found", 404);
}

exports.deleteComments = async ({data, userId}) =>{
    
    const commentId= data;
    if(commentId && userId){
        const comment = await Comment.findById(commentId);
        if(comment){
            if(userId == await comment.userId){
                const delComment = await CommentModel.findByIdAndDelete(commentId);
                return delComment;
            }
            throw new CustomError("Cannot delete Comment", 403);
        }
        throw new CustomError("Cannot find Comment", 404);
    }
    throw new CustomError("User credentials not found", 404);
}

