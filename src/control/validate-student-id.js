'use strict';
var StudentProfile = require('../entity/student-profile');
var logger = require('./get-logger');

function execute(studentId, callback) {
    StudentProfile.findOne({
        studentId: studentId
    }, function (err, res) {
        if (err) {
            logger.error('validate-student-id', err);
            callback(undefined, true);
        } else {
            if (res) {
                callback({
                    message: 'Student ID already exists.'
                });
            } else {
                callback(undefined, true);
            }
        }
    });
}

module.exports = execute;