const userRouter = require('express').Router();
const UserController = require('../controllers/UserController.js');

const UserController = require('../controllers/UserController')

router.post('/register', UserController.register)
router.post('/googleLogin', UserController.googleLogin)

module.exports = userRouter;