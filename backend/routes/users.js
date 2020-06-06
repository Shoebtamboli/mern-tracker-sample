const router = require('express').Router();
const usersController = require('../controllers/users');

/* user routes */

router.get('/', usersController.readUser);

router.post('/add', usersController.addUser);

module.exports = router;
