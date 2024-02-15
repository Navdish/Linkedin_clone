const CustomError = require('../lib/error');
const {Post, Comment, Reaction} = require('../models');

exports.addPost = async({userId, files, data})=>{
    let photos = [];
    const {title, body} = data;
    if(!(title && body && files)) throw new CustomError("details not found", 404);
    for(fil of files){
        photos = [...photos, fil.path];
    }
    const response = await Post.create({userId, title, body, photos});
    if(!response) throw new CustomError("Post not created", 500);
    return response;
}

exports.fetchPost = async()=> {
    const response = await Post.find().populate("userId", "name");
    if(!response) throw new CustomError("Post not created", 500);
    return response;
}

exports.updatePost = async({tokenUserId, body})=> {
    const {_id } = body;
    if(! _id) throw new CustomError("Post id not available", 400)
    const post = await Post.findById(_id);
    console.log(post.userId);
    if(post.userId !== tokenUserId) throw new CustomError("User not authorized to update", 401);
    // it should not contain different userId
    const {userId} = body;
    if(userId && userId !== tokenUserId) throw new CustomError("bad request, trying to change the userId of post",400);
    const response= await Post.findByIdAndUpdate(_id, body);
    if(!response) throw new CustomError("Post not updated", 500);
    return response;
}

exports.deletePost = async({userId, query})=> {
    const {_id} = query;
    const post = await Post.findById(_id);
    if(!post) throw new CustomError("Post doesn't exist", 404);
    if(post.userId !== userId) throw new CustomError("Cannot delete post", 403);
    const response = await Post.deleteOne({_id});
    const delComment = await Comment.deleteMany({postId : _id});
    const delReaction = await Reaction.deleteMany({postId : _id});
    return response;        
}
