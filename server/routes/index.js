const router = require("express").Router();
const HomeController = require("../controllers/HomeController.js");
const userRouter = require("./user.js");
const PlantRouter = require('./plants')

router.get("/", HomeController.showHome);
router.use(userRouter);

router.use('/plants', PlantRouter)
module.exports = router;