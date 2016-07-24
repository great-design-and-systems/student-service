'use strict';
var mongoose = require('mongoose');

var contactPersonSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNo: String
});
var studentProfileSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: [true, 'Student Id is required.']
    },
    name: {
        first: String,
        middle: String,
        last: String
    },
    dateOfBirth: Date,
    gender: String,
    address: String,
    barcode: String,
    contactNo: String,
    contactPerson: [contactPersonSchema],
    department: String,
    level: String,
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StudentProfile', studentProfileSchema);