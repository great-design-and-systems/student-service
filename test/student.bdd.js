var Student = require('../src/boundary/student');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
describe('Student Service BDD', function () {
    var db = new Database();

    beforeEach(function (done) {
        return db.connect(done);
    });

    describe('GIVEN: I have student data', function () {
        var studentId = '123456';
        var firstName = 'Analyn';
        var middleName = 'Rosales';
        var lastName = 'Flores';
        var gender = 'female';
        var contactNo = '09171234567';
        var emailAddress = 'analynflores@gmail.com';
        var department = 'College of Science';
        var level = '1st year';
        var data = {};

        beforeEach(function () {
            data.studentId = studentId;
            data.firstName = firstName;
            data.middleName = middleName;
            data.lastName = lastName;
            data.gender = gender;
            data.contactNo = contactNo;
            data.emailAddress = emailAddress;
            data.department = department;
            data.level = level;
        });
        describe('WHEN: validating non existing studentId', function () {
            var result = false;
            beforeEach(function (done) {
                Student.validateStudentId(data.studentId, function (err, valid) {
                    result = valid;
                    done();
                })
            });

            it('THEN: student id is valid', function () {
                expect(result).to.be.true;
            });
        });
        describe('WHEN: saving student', function () {
            var savedResult;
            beforeEach(function (done) {
                Student.create(data, function (err, result) {
                    savedResult = result;
                    done();
                });
            });

            it('THEN: response is student profile', function () {
                expect(!!savedResult).to.equal(true);
            });
            describe('WHEN: validating existing studentId', function () {
                var result = false;
                beforeEach(function (done) {
                    Student.validateStudentId(data.studentId, function (err, valid) {
                        result = valid;
                        done();
                    })
                });

                it('THEN: student id is invalid', function () {
                    expect(result).to.be.undefined;
                });
            });
            describe('WHEN: updating student profile', function () {

                var expectedResult;
                beforeEach(function (done) {
                    data.contactNo = '1234567890';
                    Student.update(savedResult._id, data, function (err, result) {
                        expectedResult = result;
                        done();
                    });
                });

                it('THEN: student profile is updated', function () {
                    expect(expectedResult.nModified).to.be.above(0);
                });
            });
            describe('GIVEN: I have studentId', function () {
                var studentProfile;
                describe('WHEN: getting studentProfile', function () {
                    beforeEach(function (done) {
                        Student.getProfileByStudentId(studentId, function (err, result) {
                            studentProfile = result;
                            done();
                        });
                    });
                    it('THEN: student profile is retrieved', function () {
                        expect(!!studentProfile).to.equal(true);
                    });
                });
                describe('WHEN: removing student', function () {
                    var message;
                    beforeEach(function (done) {
                        Student.removeStudent(studentProfile._id, function (err, result) {
                            message = result.message;
                            done();
                        });
                    });

                    it('THEN: student profile is removed', function () {
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
