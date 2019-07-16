import { Component, NgZone, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "@services/api.service";

@Component({
	selector: "app-page-add-recipe",
	templateUrl: "./add-recipe.component.html",
	styleUrls: ["./add-recipe.component.scss"]
})
export class AddRecipeComponent implements OnInit {
	public recipeForm: FormGroup;

	constructor(
		public fb: FormBuilder,
		private recipeApi: ApiService,
		private ngZone: NgZone
	) {}

	public ngOnInit() {
		this.initRecipeForm();
	}

	public initRecipeForm(): void {
		this.recipeForm = this.fb.group({
			recipe_name: ["", [Validators.required]]
		});
	}

	public submitRecipeForm(): void {
		if (this.recipeForm.valid) {
			console.log(this.recipeForm.value);

			this.recipeApi.addRecipe(this.recipeForm.value).subscribe(() => {
				this.ngZone.run(() => {
					// this.router.navigateByUrl("/students-list")
					console.log("Success!");
				});
			});
		}
	}

	public handleError(a: string, b: string): void {
		//
	}
}
