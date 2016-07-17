var StudentProfile = require('../entity/student-profile');

function execute(studentProfile, callback) {
    StudentProfile.create(studentProfile, callback);
}

module.exports = execute;