const userRouter = require('express').Router();
const UserController = require('../controllers/UserController.js');

userRouter.post('/register', UserController.register);


module.exports = userRouter;