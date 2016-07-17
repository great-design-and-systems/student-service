var API = process.env.API_NAME || '/api/student/';

function execute(req, res, err, result) {
    if (err) {
        res.status(500).send({
            message: 'Student creation failed.',
            error: err
        });
    } else {
        res.status(200).send({
            message: 'Student creation completed.',
            links: {
                profile: 'http://' + req.headers.host + API + 'student-profile/' + result.studentId
            }
        });
    }
}

module.exports = execute;