const CustomError = require('../lib/error');
const {connectionService} = require('../service');
const jwt = require("jsonwebtoken");



exports.fetchUsers = async(req, res)=> {
    try {
        const response = await connectionService.fetchUsers({userId : req?.user?.id});
        if(!response) throw new CustomError("Users not fetched/ All users are connected to you", 500)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.fetchRequests = async(req, res)=> {
    try {
        const response = await connectionService.fetchRequests({userId : req?.user?.id});
        if(!response) throw new CustomError("No invitation found", 404)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.fetchConnections = async(req, res)=> {
    try {
        const response = await connectionService.fetchConnections({userId : req?.user?.id});
        if(!response) throw new CustomError("No connections found", 404)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.postConnection = async(req, res)=> {
    try {
        const response = await connectionService.postConnection({userId : req?.user?.id, payload : req?.body});
        if(!response) throw new CustomError("Connection not sent", 500)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.updateConnection = async(req, res)=> {
    try {
        const response = await connectionService.updateConnection({userId : req?.user?.id, query : req?.query});
        if(!response) throw new CustomError("Internal serever error", 500)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.deleteConnection = async(req, res)=> {
    try {
        const response = await connectionService.deleteConnection({userId : req?.user?.id, payload : req?.body});
        if(!response) throw new CustomError("Connection not deleted", 500)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

