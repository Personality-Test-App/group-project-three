const router = require("express").Router();
const HomeController = require("../controllers/HomeController.js");
const userRouter = require("./user.js");

router.get("/", HomeController.showHome);
router.use(userRouter);


module.exports = router;