var Student = require('../src/boundary/student');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var CONNECT_TEST_TIMEOUT = process.env.CONNECT_TEST_TIMEOUT || 50000;

describe('Student Service BDD', function () {
    var db = new Database();

    beforeEach(function (done) {
        this.timeout(CONNECT_TEST_TIMEOUT)
        return db.connect(done);
    });

    describe('GIVEN: I have studentId, firstname, middlename, lastname, dateOfBirth, gender, address, barcode, contactNo, department and level', function () {
        var studentId = '1234567890';
        var firstname = 'Analyn';
        var lastname = 'Flores';
        var middlename = 'Rosales';
        var dateOfBirth = '1989-08-08';
        var gender = 'female';
        var address = 'Pasig City';
        var barcode = '79079797979723453';
        var contactNo = '09178661583';
        var department = 'Department of Energy';
        var level = 'First Year College';
        var studentForm = {};

        beforeEach(function () {
            studentForm.studentId = studentId;
            studentForm.firstname = firstname;
            studentForm.lastname = lastname;
            studentForm.middlename = middlename;
            studentForm.dateOfBirth = dateOfBirth;
            studentForm.gender = gender;
            studentForm.address = address;
            studentForm.barcode = barcode;
            studentForm.contactNo = contactNo;
            studentForm.department = department;
            studentForm.level = level;
        });

        describe('WHEN: saving student', function () {
            var savedResult;
            var studentId;
            beforeEach(function (done) {
                Student.create(studentForm, function (err, studentSavedResult) {
                    savedResult = studentSavedResult;
                    studentId = studentSavedResult.studentId;
                    done();
                });
            });

            it('THEN: response is student profile', function () {
                expect(!!savedResult).to.equal(true);
            });

            describe('GIVEN: I have studentId', function () {
                describe('WHEN: getting studentProfile', function () {
                    var studentProfile;

                    beforeEach(function (done) {
                        Student.getProfileByStudentId(studentId, function (err, studentProfileResult) {
                            studentrofile = userProfileResult;
                            done();
                        });
                    });

                    it('THEN: student profile is retrieved', function () {
                        expect(!!studentrofile).to.equal(true);
                    });

                });
                describe('WHEN: removing student', function () {
                    var message;
                    beforeEach(function (done) {
                        Student.removeUser(studentId, function (err, result) {
                            message = result.message;
                            done();
                        });
                    });

                    it('THEN: student and student profile are removed', function () {
                        expect(!!message).to.equal(true);
                        expect(message).to.equal('Student has been removed.');
                    });

                });
            });
        });
    });

    afterEach(function (done) {
        return db.disconnect(done);
    });
});