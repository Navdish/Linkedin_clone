const CustomError = require('../lib/error');
const model = require('../models');


exports.updateUser = async function({id, req}) {
    const response = await model.User.findByIdAndUpdate(id, req);
    return response;
}

