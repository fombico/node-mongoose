var mongoose = require('mongoose'),
	Users = mongoose.model('Users'),
	controller = {};

// GET /
controller.index = [
	(req, res, next) => {
		res.render('form');
	}
]


// POST *
controller.create = [
	(req, res, next) => {
		if ("name" in req.body && req.body.name !== '') {
			next();
		} else {
			res.status(400).send("name not present");
		}
	},
	(req, res, next) => {
		if ("email" in req.body && req.body.email !== '') {
			next();
		} else {
			res.status(400).send("email not present");
		}
	},
	(req, res, next) => {
		Users.create(req.body, (err, user) => {
			if (err) return next(err);

			res.status(200).send(user);
		});
	}
]

module.exports = controller;