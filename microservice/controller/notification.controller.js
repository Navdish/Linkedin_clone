const {notificationService} = require ('../service/index')

exports.createNotification = async(req, res)=>{
    try {
        const response = await notificationService.newNotification({payload : req?.body});
        console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}