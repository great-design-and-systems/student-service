'use strict';
var Student = require('./student');
var NotFoundException = require('../control/not-found-exception');
var getCreateResponse = require('../control/get-create-response');
var API = process.env.API_NAME || '/api/student/';

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.status(200).send({
            domain: process.env.DOMAIN_NAME || 'Student',
            links: {
                getProfileByStudentId: {
                    method: 'GET',
                    url: 'http://' + req.headers.host + API + 'student-profile/:studentId'
                },
                createStudent: {
                    method: 'POST',
                    url: 'http://' + req.headers.host + API + 'create'
                },
                updateStudent: {
                    method: 'PUT',
                    url: 'http://' + req.headers.host + API + 'update'
                },
                deleteStudent: {
                    method: 'DELETE',
                    url: 'http://' + req.headers.host + API + ':studentId'
                },
                getStudents: {
                    method: 'GET',
                    url: 'http://' + req.headers.host + API + 'get-students'
                }
            }
        });
    });

    app.get(API + 'student-profile/:studentId', function (req, res) {
        Student.getProfileByStudentId(req.params.studentId, function (err, result) {
            if (err) {
                res.status(404).send(new NotFoundException('Student profile'));
            } else {
                res.status(200).send(result);
            }
        });
    });
    app.post(API + 'create', function (req, res) {
        Student.create(req.body, function (err, result) {
            new getCreateResponse(req, res, err, result);
        });
    });
    app.put(API + 'update', function (req, res) {
        Student.update(req.body, function (err, numberAffected, response) {
            if (err) {
                res.status(500).send(response);
            } else {
                console.log(numberAffected);
                res.status(200).send(numberAffected);
            }
        });
    });
    app.delete(API + ':studentId', function (req, res) {
        Student.removeStudent(req.params.studentId, function (err, result) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove student id ' + req.params.studentId + '.'
                });
            } else {
                res.status(200).send(result);
            }
        });
    });
    app.get(API + 'get-students', function (req, res) {
        Student.getStudents(req.query, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });
};