const {Notification} = require('../model/index')


exports.newNotification = async ({payload}) =>{
    console.log("payload", payload);
    const {sender, receiver, notificationType, content} = payload;
    console.log(sender, receiver, notificationType, content);
    const response = await Notification.create({notificationType, sender, receiver, content});   

    // emit the response to the active users
    return response;
}