let Exercise = require('../models/exercise.model');

const addExercise = (req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	const newExercise = new Exercise({
		username,
		description,
		duration,
		date
	});

	newExercise
		.save()
		.then(() => res.status(200).json('Exercise added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
};

const readExerciseById = (req, res) => {
	Exercise.findById(req.params.id)
		.then((exercise) => res.status(200).json(exercise))
		.catch((err) => res.status(400).json('Error: ' + err));
};

const readExercise = (req, res) => {
	Exercise.find()
		.then((exercises) => res.status(200).json(exercises))
		.catch((err) => res.status(400).json('Error: ' + err));
};

const deleteExerciseById = (req, res) => {
	Exercise.findByIdAndDelete(req.params.id)
		.then(() => res.status(200).json('Exercise deleted.'))
		.catch((err) => res.status(400).json('Error: ' + err));
};

const updateExercise = (req, res) => {
	Exercise.findById(req.params.id)
		.then((exercise) => {
			exercise.username = req.body.username;
			exercise.description = req.body.description;
			exercise.duration = Number(req.body.duration);
			exercise.date = Date.parse(req.body.date);

			exercise
				.save()
				.then(() => res.status(200).json('Exercise updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
};

module.exports = {
	addExercise,
	readExerciseById,
	readExercise,
	deleteExerciseById,
	updateExercise
};
