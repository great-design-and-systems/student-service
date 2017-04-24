'use strict';

var StudentProfile = require('../entity/student-profile');
var logger = require('./get-logger');

function execute(id, update, callback) {
    StudentProfile.update({_id : id}, update, function(err, result) {
        if (err) {
            logger.error('update-student-profile', err);
            callback({
                message: 'Failed to update student: ' + id
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;