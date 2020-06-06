const router = require('express').Router();
const exerciseController = require('../controllers/exercises');

/* exercise routes */

router.get('/', exerciseController.readExercise);

router.post('/add', exerciseController.addExercise);

router.get('/:id', exerciseController.readExerciseById);

router.delete('/:id', exerciseController.deleteExerciseById);

router.post('/update/:id', exerciseController.updateExercise);

module.exports = router;
