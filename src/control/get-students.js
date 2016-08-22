'use strict';
var StudentProfile = require('../entity/student-profile');
var logger = require('./get-logger');

function execute(param, callback) {
	StudentProfile.paginate({}, {
		page : parseInt(param.page),
		limit : parseInt(param.limit),
		sort : param.sort
	}, function(err, result) {
        if (err) {
            logger.error('get-students', err);
            callback({
                message: 'Failed to get students.'
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;