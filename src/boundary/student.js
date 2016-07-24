'use strict';
var CreateStudentProfile = require('../control/create-student-profile');
var UpdateStudentProfile = require('../control/update-student-profile');
var GetStudentProfileByStudentId = require('../control/get-student-profile-by-student-id');
var DeleteStudentProfileByStudentId = require('../control/delete-student-profile-by-student-id');

module.exports = {
    getProfileByStudentId: function (studentId, callback) {
        new GetStudentProfileByStudentId(studentId, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(undefined, result);
            }
        });
    },
    create: function (param, callback) {
        new CreateStudentProfile({
            studentId: param.studentId,
            name: {
                first: param.firstName,
                middle: param.middleName,
                last: param.lastName
            },
            dateOfBirth: param.dateOfBirth,
            gender: param.gender,
            address: param.address,
            barcode: param.barcode,
            contactNo: param.contactNo,
            contactPerson: {
                name: param.contactName,
                email: param.contactEmail,
                phoneNo: param.contactPersonNo
            },
            department: param.department,
            level: param.level
        }, callback);
    },
    update: function (param, callback) {
        new UpdateStudentProfile(param.studentId, param, callback);
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
    }
};