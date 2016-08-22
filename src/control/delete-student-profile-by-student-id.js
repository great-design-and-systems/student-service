'use strict';
var StudentProfile = require('../entity/student-profile');
var logger = require('./get-logger');

function execute(studentId, callback) {
    StudentProfile.findByIdAndRemove(studentId, function(err, result) {
        if (err) {
            logger.error('delete-student-profile-by-student-id', err);
            callback({
                message: 'Failed removing student ID' + studentId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;