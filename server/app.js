require("dotenv").config();

const cors = require('cors')
const express = require("express");
const app = express();
const port = process.env.PORT;
const routes = require("./routes/index.js");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

//Routes
app.use(routes);

//Listen
app.listen(port, () => {
	console.log(`App is running on http://localhost:${port}`)
});