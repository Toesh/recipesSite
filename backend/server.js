let express = require("express");
let path = require("path");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dataBaseConfig = require("./database/db");

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose
	.connect(dataBaseConfig.db, {
		useNewUrlParser: true
	})
	.then(
		() => {
			console.log("Database connected sucessfully ");
		},
		error => {
			console.log("Could not connected to database : " + error);
		}
	);

// Set up express js port
const recipeRoute = require("./routes/recipe.route");
const app = express();
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(cors());
app.use(
	express.static(
		path.join(__dirname, "dist/angular8-meanstack-angular-material")
	)
);
app.use(
	"/",
	express.static(
		path.join(__dirname, "dist/angular8-meanstack-angular-material")
	)
);
app.use("/api", recipeRoute);

// Create port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
	console.log("Connected to port " + port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	console.error(err.message);
	if (!err.statusCode) err.statusCode = 500;
	res.status(err.statusCode).send(err.message);
});
