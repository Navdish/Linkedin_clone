const CustomError = require('../lib/error');
const {Post, Comment, Reaction} = require('../models');

exports.addPost = async({userId, files, data})=>{
    let photos = [];
    const {title, body} = data;
    if(!(title && body )) throw new CustomError("details not found", 404);
    photos = files?.map((x)=> x.path);
    const response = await Post.create({userId, title, body, photos});
    if(!response) throw new CustomError("Post not created", 500);
    const newPost = await Post.findById(response._id).populate("userId", ["name", "description"]);
    if(!newPost) throw new CustomError("internal Server Error", 500);
    return newPost;
}

exports.fetchPost = async()=> {
    const response = await Post.find().populate("userId", ["name", "description"]);
    // using aggregation to fetch no. of likes and comments on a post
    if(!response) throw new CustomError("Post not created", 500);
    return response;
}

exports.updatePost = async({tokenUserId, body, params})=> {
    const {postId}  = params;
    if(! postId) throw new CustomError("Post id not available", 400)
    const post = await Post.findById(postId);
    if(! post) throw new CustomError("Post with this _id doesn't exist", 400)
    if(post.userId !== tokenUserId) throw new CustomError("User not authorized to update", 401);
    // it should not contain different userId
    const {userId} = body;
    if(userId && userId !== tokenUserId) throw new CustomError("bad request, trying to change the userId of post",400);
    const response= await Post.findByIdAndUpdate(postId, body, {new: true});
    if(!response) throw new CustomError("Post not updated", 500);
    return response;
}

exports.deletePost = async({userId, params})=> {
    const {postId} = params;
    if(! postId) throw new CustomError("Post id not available", 400)
    const post = await Post.findById(postId);
    if(!post) throw new CustomError("Post doesn't exist", 404);
    if(post.userId !== userId) throw new CustomError("(Not authorized) Cannot delete post", 403);
    const response = await Post.deleteOne({_id: postId});
    const delComment = await Comment.deleteMany({postId});
    const delReaction = await Reaction.deleteMany({postId});
    return response;        
}
