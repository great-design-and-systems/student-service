var Database = require('./src/config/database');
var Server = require('./src/config/server');
var StudentResource = require('./src/boundary/student-resource');
var express = require('express');
var app = express();
var LoggerServer = require('./src/config/logger-server');

(function () {
    new Database();
    new Server(app);
    new StudentResource(app);
    new LoggerServer(app);
})();

module.exports = app;