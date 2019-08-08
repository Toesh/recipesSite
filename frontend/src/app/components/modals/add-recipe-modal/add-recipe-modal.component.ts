import { Component, Inject, NgZone, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ApiService } from "@services/api.service";

@Component({
	selector: "app-add-recipe-modal",
	templateUrl: "add-recipe-modal.component.html",
	styleUrls: ["add-recipe-modal.component.scss"]
})
export class AddRecipeModalComponent implements OnInit {
	public recipeForm: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<AddRecipeModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		public fb: FormBuilder,
		private recipeApi: ApiService,
		private ngZone: NgZone
	) {}

	public ngOnInit() {
		this.initRecipeForm();
	}

	public initRecipeForm(): void {
		this.recipeForm = this.fb.group({
			alternatives: [""],
			cooking_time: [0, [Validators.required]],
			description: ["", [Validators.required]],
			difficulty: ["", [Validators.required]],
			image: [""],
			ingredients: [""],
			link: [""],
			preparation_time: ["", [Validators.required]],
			ranking: [0],
			recipe_name: ["", [Validators.required]],
			steps: [""],
			tags: [""]
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

	public onCancelClick(): void {
		this.dialogRef.close();
	}
}
