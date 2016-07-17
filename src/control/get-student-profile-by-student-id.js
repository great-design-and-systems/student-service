var StudentProfile = require('../entity/student-profile');

function execute(studentId, callback) {
    StudentProfile.findOne({
        studentId: studentId
    }, callback);
}

module.exports = execute;