let User = require('../models/user.model');

const addUser = (req, res) => {
	const username = req.body.username;

	const newUser = new User({ username });

	newUser
		.save()
		.then(() => res.status(200).json('User added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
};

const readUser = (req, res) => {
	User.find().then((users) => res.status(200).json(users)).catch((err) => res.status(400).json('Error: ' + err));
};

module.exports = {
	addUser,
	readUser
};
