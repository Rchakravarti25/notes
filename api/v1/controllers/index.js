// var Model = require('../models/index').models;

exports.home = function (req, res, next) {
	res.render('index', {
		title: 'Express'
	});
}
