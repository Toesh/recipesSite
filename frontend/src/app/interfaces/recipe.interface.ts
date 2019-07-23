export interface IRecipe {
	_id: string;
	alternatives: string;
	cooking_time: number;
	description: string;
	difficulty: Difficulty;
	image: string;
	ingredients: string[];
	link: string;
	nutrition: INutrition; // 1 Serving
	preparation_time: number;
	ranking: number;
	recipe_name: string;
	steps: string[];
	tags: string[];
}

interface INutrition {
	kcal: number;
	fat: IFat;
	carbohydrates: number; // grams
	sugar: number; // grams
	fibre: number; // grams
	protein: number; // grams
	salt: number; // grams
}

interface IFat {
	unsaturated: number; // grams
	monounsaturated: number; // grams
	polyunsaturated: number; // grams
	trans: number; // grams
}

enum Difficulty {
	easy,
	medium,
	hard
}
