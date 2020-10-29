const router = require('express').Router()

const UserController = require('../controller/user')

router.post('/login', UserController.login)


module.exports = router 