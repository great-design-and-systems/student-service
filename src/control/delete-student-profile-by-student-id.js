'use strict';
var StudentProfile = require('../entity/student-profile');
var GetLogger = require('./get-logger');

function execute(studentId, callback) {
    var logger;
    new GetLogger(function(err, log) {
        logger = log;
    });
    StudentProfile.findByIdAndRemove(studentId, function(err, result) {
        if (err) {
            logger.error(err);
            callback({
                message: 'Failed removing student ID' + studentId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;