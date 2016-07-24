'use strict';

var StudentProfile = require('../entity/student-profile');

function execute(condition, update, callback) {
    StudentProfile.update(condition, update, { multi: true }, callback);
}

module.exports = execute;