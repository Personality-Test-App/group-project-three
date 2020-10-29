class HomeController {
	static showHome(req, res) {
		res.send("App is running now")
	}
}

module.exports = HomeController;