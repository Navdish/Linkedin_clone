const CustomError = require('../lib/error');
const {commentService} = require('../service');

const fetch_comments = async function (req, res){
    try {
        const comments = await commentService.fetchComments({post_id : req?.query?.post_id, time : req?.query?.date});
        res.status(200).json(comments);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

const post_comments = async function (req, res){
    try {
        const comment = await commentService.postComments({user_id : req?.res?.id, data : req?.body});
        res.status(200).json({message: "Comment posted successfully"})
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

const update_comments =async function (req, res){
    try {
        const response = await commentService.updateComments({user_id : req?.res?.id,data : req?.body});
        return res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

const delete_comments = async function (req, res){
    try {
        const response = await commentService.deleteComments({data : req?.query, userId: req?.res?.id});
        return res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

module.exports = {
    fetch_comments,
    post_comments,
    update_comments,
    delete_comments
}