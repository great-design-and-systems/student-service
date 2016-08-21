'use strict';
var StudentProfile = require('../entity/student-profile');

function execute(studentId, callback) {
    StudentProfile.findOneAndRemove({
        studentId: studentId
    }, callback);
}

module.exports = execute;
