'use strict';

exports.index = function (req, res, next) {
	console.log(req.user);
    res.render('index', {
		title: 'Express',
		user: req.user
	});
};
