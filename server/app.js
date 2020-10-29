require("dotenv").config();

const express = require("express");
<<<<<<< HEAD
=======
const cors = require("cors")
>>>>>>> 57d8aef1aa03f710ec83285c7d6806d09834dcfd
const app = express();
const port = process.env.PORT;
const routes = require("./routes/index.js");
const errorHandler = require("./middlewares/errorHandler.js")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

//Routes
app.use(routes);
app.use(errorHandler)

//Listen
app.listen(port, () => {
	console.log(`App is running on http://localhost:${port}`)
});