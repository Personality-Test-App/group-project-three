module.exports = function (err, res, res, next) {
	let status = null;
	let name = err.name;

	if (name === "SequelizeValidationError") {
		status = 400;
		error = err.errors.map(el => {
			return el.message
		}).join(", ");
	} else if (name === "InvalidUsernamePassword") {
		status = 400;
		errpr = "Invalid Username / Password"
	} else if (name === "AuthenticationFailed") {
		status = 401;
		error = "Authentication Failed";
	} else if (name === "NotAuthorized") {
		status = 403;
		error = "Not Authorized";
	} else if (name === "NotFound") {
		status = 404;
		error = "Not Found";
	} else {
		status = 500;
		error = "Internal Server Error";
	}

	res.status(status).json(error);
}