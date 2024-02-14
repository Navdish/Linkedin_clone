const CustomError = require('../lib/error');
const {commentService} = require('../service');

exports.fetch_comments = async(req, res)=>{
    try {
        const comments = await commentService.fetchComments({post_id : req?.query?.post_id, time : req?.query?.date});
        res.status(200).json(comments);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.post_comments = async (req, res)=>{
    try {
        const comment = await commentService.postComments({user_id : req?.res?.id, data : req?.body});
        res.status(200).json({message: "Comment posted successfully"})
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.update_comments = async(req, res)=>{
    try {
        const response = await commentService.updateComments({user_id : req?.res?.id,data : req?.body});
        return res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.delete_comments = async(req, res)=>{
    try {
        const response = await commentService.deleteComments({data : req?.query, userId: req?.res?.id});
        return res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}
