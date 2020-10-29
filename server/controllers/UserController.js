const { User } = require('../models/index')
const { comparePassword } = require("../helpers/bcrypt.js");
const { signToken } = require("../helpers/jwt.js");
const { OAuth2Client } = require('google-auth-library')

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

<<<<<<< HEAD
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
=======
	static googleLogin(req, res, next) {
		// get token from client
		let { google_access_token } = req.body
		const client = new OAuth2Client(process.env.CLIENT_ID);
		// verify google token berdasarkan client id
		client.verifyIdToken({
			idToken: google_access_token,
			audience: process.env.CLIENT_ID
		})
		.then(ticket => {
			let payload = ticket.getPayload
      console.log("UserController -> googleLogin -> payload", payload)
		})
		.catch(err => {
			console.log(err);
		})
>>>>>>> 7d7892a59957c6320e3c3583a291e55f3e1e2a61
	}
}

module.exports = UserController