var StudentProfile = require('../entity/student-profile');

function execute(studentId, callback) {
    StudentProfile.remove({
        studentId: studentId
    }, callback);
}

module.exports = execute;