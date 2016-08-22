'use strict';
var StudentProfile = require('../entity/student-profile');
var logger = require('./get-logger');

function execute(studentId, callback) {
    StudentProfile.findOne({
        studentId: studentId
    }, function(err, result) {
        if (err) {
            logger.error('get-student-profile-by-student-id', err);
            callback({
                message: 'Failed to get student ID' + studentId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;