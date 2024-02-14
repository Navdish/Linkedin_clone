const CustomError = require('../lib/error');
const {postService} = require('../service');
const jwt = require("jsonwebtoken");


exports.add_posts = async(req, res)=> {
    try {
        const response = await postService.addPost({user_id : req?.user?.id, files: req?.files, body: req?.body});
        if(!response)
        {
            throw new CustomError("Post not added", 500)
        }
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.fetch_posts = async(req, res)=> {
    try {
        const response = await postService.fetchPost({user_id : req?.user?.id});
        if(!response)
        {
            throw new CustomError("Posts not fetched", 500)
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.update_posts = async(req, res)=> {
    try {
        const response = await postService.updatePost({body : req?.body});
        res.status(200).json(response);
    }
    catch (error) {
        res.status(error?.code).json({message : error?.message});
    }   
}

exports.remove_posts = async(req, res)=> {
    try {
        const response = await postService.deletePost({user_id : req?.res?.user,body : req?.body});
        res.status(200).json(response);
    }
    catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}
