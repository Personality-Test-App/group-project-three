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

	static login(req, res, next) {
		const { email, password } = req.body
		User.findOne({
			where: { email }
		})
			.then((dataUser) => {
				if (!dataUser) {
					throw { name: "InvalidUsernamePassword" }
				}
				const matchPassword = comparePassword(password, dataUser.password)

				if (!matchPassword) {
					throw { name: "InvalidUsernamePassword" }
				} else {
					let payload = { id: dataUser.id, email: dataUser.email }
					let token = signToken(payload)
					res.status(201).json({ token })
				}
			})
			.catch((err) => {
				next(err)
			})
	}
}

module.exports = UserController