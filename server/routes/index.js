const router = require("express").Router();
const HomeController = require("../controllers/HomeController.js");
const userRouter = require('./user.js')

router.get("/", HomeController.showHome)
router.use('/users', userRouter)


module.exports = router;