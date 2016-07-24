'use strict';

var StudentProfile = require('../entity/student-profile');

function execute(condition, update, callback) {
    console.log(condition);
    console.log(update);
    StudentProfile.update(condition, update, { multi: true }, callback);
}

module.exports = execute;