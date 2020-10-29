const router = require("express").Router();
const HomeController = require("../controllers/HomeController.js");

router.get("/", HomeController.showHome)


module.exports = router;