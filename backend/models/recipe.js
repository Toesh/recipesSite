const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let recipe = new Schema(
	{
		recipe_name: {
			type: String
		}
	},
	{
		collection: "recipes"
	}
);

module.exports = mongoose.model("Recipes", recipe);
