'use strict';
var StudentProfile = require('../entity/student-profile');

function execute(param, callback) {
	StudentProfile.paginate({}, {
		page : parseInt(param.page),
		limit : parseInt(param.limit),
		sort : param.sort
	}, callback);
}

module.exports = execute;