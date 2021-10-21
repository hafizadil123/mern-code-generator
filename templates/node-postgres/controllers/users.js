// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// var uniqid = require('uniqid');
// const { logger } = require('../utils');
// const models = require('../models/index');
// const { updateUserLastActivity } = require('../helpers/users');
// const { dbRecordsLimit, getDbRecordsOffset } = require('../helpers/constants');

exports.register = (req, res) => {

    res.status(200).json({
        message: "welcome in register endpoint"
    })

};


