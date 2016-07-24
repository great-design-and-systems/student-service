var Student = require('./student');
var NotFoundException = require('../control/not-found-exception');
var getCreateResponse = require('../control/get-create-response');
var API = process.env.API_NAME || '/api/student/';

module.exports = function (app) {
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
};