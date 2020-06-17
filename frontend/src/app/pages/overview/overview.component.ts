import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { IRecipe } from "@interfaces/recipe.interface";
import { ApiService } from "@services/api.service";

@Component({
	selector: "app-page-overview",
	templateUrl: "./overview.component.html",
	styleUrls: ["./overview.component.scss"]
})
export class OverviewComponent {
	public recipeData;
	public dataSource: MatTableDataSource<IRecipe>;
	public displayedColumns: string[] = ["_id", "student_name"];

	public constructor(private recipeApi: ApiService) {
		this.recipeApi.getrecipes().subscribe(data => {
			this.recipeData = data;
			console.log(data);
			this.dataSource = new MatTableDataSource<IRecipe>(this.recipeData);
		});
	}
}
