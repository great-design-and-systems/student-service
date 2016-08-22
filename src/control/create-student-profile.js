'use strict';
var StudentProfile = require('../entity/student-profile');
var logger = require('./get-logger');

function execute(studentProfile, callback) {
    StudentProfile.create(studentProfile, function(err, result) {
        if (err) {
            logger.error('create-student-profile', err);
            callback({
                message: 'Failed to create student profile.'
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;