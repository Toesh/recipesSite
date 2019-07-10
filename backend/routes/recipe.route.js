const express = require("express");
const app = express();
const recipeRoute = express.Router();

// Recipe model
let recipe = require("../models/recipe");

// Add recipe
recipeRoute.route("/add-recipe").post((req, res, next) => {
	recipe.create(req.body, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

// Get all recipe
recipeRoute.route("/").get((req, res) => {
	recipe.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

// Get single recipe
recipeRoute.route("/read-recipe/:id").get((req, res) => {
	recipe.findById(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

// Update recipe
recipeRoute.route("/update-recipe/:id").put((req, res, next) => {
	recipe.findByIdAndUpdate(
		req.params.id,
		{
			$set: req.body
		},
		(error, data) => {
			if (error) {
				return next(error);
			} else {
				res.json(data);
				console.log("Recipe successfully updated!");
			}
		}
	);
});

// Delete recipe
recipeRoute.route("/delete-recipe/:id").delete((req, res, next) => {
	recipe.findByIdAndRemove(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data
			});
		}
	});
});

module.exports = recipeRoute;
