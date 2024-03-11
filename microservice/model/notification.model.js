const mongoose = require('mongoose');

const Notification = mongoose.Schema({
    notificationType:  {
        type: String,
        enum: ['POST', 'REACTION', 'COMMENT', 'REQUEST']
    },
    receiver : [{
        type: String
    }],
    sender : String,
    content: {
        type: Object
    }

}, {timestamps: true} )

const Notifications =  mongoose.model('NotificationModel', Notification);
module.exports = Notifications;