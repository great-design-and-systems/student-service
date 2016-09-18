'use strict';
var CreateStudentProfile = require('../control/create-student-profile');
var UpdateStudentProfile = require('../control/update-student-profile');
var GetStudentProfileByStudentId = require('../control/get-student-profile-by-student-id');
var DeleteStudentProfileByStudentId = require('../control/delete-student-profile-by-student-id');
var GetStudents = require('../control/get-students');
var ValidateStudentId = require('../control/validate-student-id');
module.exports = {
    getProfileByStudentId: function (studentId, callback) {
        new GetStudentProfileByStudentId(studentId, function (err, result) {
            if (err) {
                callback(err);
            } else {
                if (result) {
                    callback(null, result);
                } else {
                    callback(true, null);
                }
            }
        });
    },
    create: function (param, callback) {
        new CreateStudentProfile({
            studentId: param.studentId,
            firstName: param.firstName,
            middleName: param.middleName,
            lastName: param.lastName,
            gender: param.gender,
            contactNo: param.contactNo,
            emailAddress: param.emailAddress,
            department: param.department,
            level: param.level,
            imageId: param.imageId
        }, callback);
    },
    update: function (studentId, param, callback) {
        new UpdateStudentProfile(studentId, param, callback);
    },
    removeStudent: function (studentId, callback) {
        new DeleteStudentProfileByStudentId(studentId, function (err) {
            if (!err) {
                callback(undefined, {
                    message: 'Student has been removed.'
                });
            } else {
                callback(err);
            }
        });
    },
    getStudents: function (queryParam, callback) {
        console.log(queryParam);
        new GetStudents(queryParam, function (err, result) {
            if (err) {
                callback({message: 'Failed to get student records.'});
            } else {
                callback(undefined, result);
            }
        });
    },
    validateStudentId: function (studentId, callback) {
        new ValidateStudentId(studentId, callback);
    }
};