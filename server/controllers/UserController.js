const { User } = require('../models/index')
const { comparePassword } = require("../helpers/bcrypt.js");
const { signToken } = require("../helpers/jwt.js");

class UserController {
	static register(req, res, next) {
		const { username, email, password } = req.body

		User.create({ username, email, password })
			.then((dataUser) => {
				res.status(201).json({
					id: dataUser.id,
					username: dataUser.username,
					email: dataUser.email,
					msg: "Register success"
				})
			})
			.catch((err) => {
				next(err)
			})
	}
}

module.exports = UserController