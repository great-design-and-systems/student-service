var Student = require('../src/boundary/student');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
describe('Student Service BDD', function() {
    var db = new Database();

    beforeEach(function(done) {
        return db.connect(done);
    });

        describe('GIVEN: I have student data', function () {
            var studentId = '123456';
            var firstName = 'Analyn';
            var middleName = 'Rosales';
            var lastName = 'Flores';
            var birthDate = '1990-01-01';
            var gender = 'female';
            var address = 'Ortigas Center, Pasig City';
            var contactNo = '09171234567';
            var emailAddress = 'analynflores@gmail.com';
            var department = 'College of Science';
            var level = '1st year';
            var contactName = 'Jerico';
            var contactAddress = 'Quezon City';
            var contactEmail = 'jerico@gmail.com';
            var contactPersonNo = '09174351234';
            var data = {};

            beforeEach(function () {
                data.studentId = studentId;
                data.firstName = firstName;
                data.middleName = middleName;
                data.lastName = lastName;
                data.birthDate = birthDate;
                data.gender = gender;
                data.address = address;
                data.contactNo = contactNo;
                data.emailAddress = emailAddress;
                data.department = department;
                data.level = level;
                data.contactName = contactName;
                data.contactAddress = contactAddress;
                data.contactEmail = contactEmail;
                data.contactPersonNo = contactPersonNo;
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
                describe('WHEN: updating student profile', function() {
                
                    var expectedResult;
                    beforeEach(function (done) {
                        data.address = 'Dasmarinas, Cavite';
                        Student.update(data, function (err, result) {
                            expectedResult = result;
                            done();
                        });
                    });

                    it('THEN: student profile is updated', function () {
                        expect(expectedResult.nModified).to.be.above(0);
                    });      
                });
                describe('GIVEN: I have studentId', function () {
                    describe('WHEN: getting studentProfile', function() {
                        var studentProfile;
                        beforeEach(function (done) {
                            Student.getProfileByStudentId(studentId, function(err, result) {
                                studentProfile = result;
                                done();
                            });
                        });
                        it('THEN: student profile is retrieved', function () {
                            expect(!!studentProfile).to.equal(true);
                        });
                    });
                    describe('WHEN: removing student', function() {
                        var message;
                        beforeEach(function (done) {
                            Student.removeStudent(studentId, function (err, result) {
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

    afterEach(function(done) {
        return db.disconnect(done);
    });
});