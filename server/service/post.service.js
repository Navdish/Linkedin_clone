const CustomError = require('../lib/error');
const {Post} = require('../models');

exports.addPost = async({user_id, files, boddy})=>{
    let entry = [];
    const {title, body} = boddy;
    if(title && body && files){
        for(fil of files){
            entry = [...entry, fil.path];
        }
        const response = await Post.create({user_id, title, body, entry});
        if(!response)
        {
            throw new CustomError("Reaction not created", 500);
        }
        return response;
    }
    throw new CustomError("details not found", 404);
}

exports.fetchPost = async({user_id})=> {
    const response = await Post.find({userId : user_id});
    if(!response)
    {
        throw new CustomError("Reaction not created", 500);
    }
    return response;
}

exports.updatePost = async({body})=> {
    const {post_id, post_details} = body;
    const response= await Post.findByIdAndUpdate(post_id,{post_details});
    if(!response)
    {
        throw new CustomError("Reaction not created", 500);
    }
    return response;
}

exports.deletePost = async({user_id, body})=> {
    const {post_id} = body;
    const post = await Post.findById(post_id);
    if(post){
        if(post.userId === user_id)
        {
            const response = await Post.deleteOne({post_id : post_id});
        }
        throw new CustomError("Cannot delete post", 403);
    } 
    throw new CustomError("Post doesn't exist", 404);
}
