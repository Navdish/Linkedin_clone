const CustomError = require('../lib/error');
const {commentService} = require('../service');

exports.fetchComment = async(req, res)=>{
    try {
        console.log(req?.query)
        const comments = await commentService.fetchComments({query : req?.query});
        res.status(200).json(comments);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.postComment = async (req, res)=>{
    try {
        const comment = await commentService.postComments({userId : req?.user?.id, data : req?.body});
        res.status(200).json(comment)
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.updateComment = async(req, res)=>{
    try {
        const response = await commentService.updateComments({user_id : req?.user?.id,data : req?.body, params: req?.params});
        return res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.deleteComment = async(req, res)=>{
    try {
        const response = await commentService.deleteComments({params : req?.params, userId: req?.user?.id});
        return res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}
