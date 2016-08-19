'use strict';
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var uniqueValidator = require('mongoose-unique-validator');

var studentProfileSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: [true, 'Student Id is required.'],
        unique: true
    },
    firstName: {
        type: String,
        required: [true, 'firstname is required.']
    },
    middleName: String,
    lastName: {
        type: String,
        required: [true, 'lastname is required.']
    },
    gender: String,
    contactNo: String,
    emailAddress: String,
    department: String,
    level: String,
    createdOn: { type: Date, default: Date.now }
});

studentProfileSchema.plugin(mongoosePaginate);
studentProfileSchema.plugin(uniqueValidator);

module.exports = mongoose.model('StudentProfile', studentProfileSchema);