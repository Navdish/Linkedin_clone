const CustomError = require('../lib/error');
const service = require('../service');

const fetch_comments = async function (req, res){
    try {
        const comments = await service.commentService.fetchComments({post_id : req?.body?.post_id, time : req?.body?.date});
        res.status(200).json(comments);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

const post_comments = function (req, res){
    try {
        const comment = service.commentService.postComments({user_id : req?.res?.id, data : req?.body});
        res.status(200).json({message: "Comment posted successfully"})
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

const update_comments = function (req, res){
    try {
        
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

const delete_comments = function (req, res){
    try {
        
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