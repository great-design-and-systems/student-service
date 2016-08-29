'use strict';

var StudentProfile = require('../entity/student-profile');
var logger = require('./get-logger');

function execute(condition, update, callback) {
    StudentProfile.update(condition, update, { multi: true }, function(err, result) {
        if (err) {
            logger.error('update-student-profile', err);
            callback({
                message: 'Failed to update student: ' + condition
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;