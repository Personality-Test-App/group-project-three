const router = require("express").Router();
const PlantController = require("../controllers/PlantController.js");

router.get("/", PlantController.getAllPlants)

// router.get('/plants', )

module.exports = router;