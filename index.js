var Database = require('./src/config/database');
var Server = require('./src/config/server');
var StudentResource = require('./src/boundary/student-resource');
var express = require('express');
var app = express();

(function() {
    new Database();
    new Server(app);
    new StudentResource(app);
})();

module.exports = app;