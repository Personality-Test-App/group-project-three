require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors")
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