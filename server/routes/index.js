const router = require("express").Router();
const PlantRouter = require('./plants')

const HomeController = require("../controllers/HomeController.js");

// router.get("/", HomeController.showHome)

router.use('/plants', PlantRouter)
module.exports = router;