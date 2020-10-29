const userRouter = require('express').Router();
const UserController = require('../controllers/UserController.js');

userRouter.post('/googleLogin', UserController.googleLogin)
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);

module.exports = userRouter;

