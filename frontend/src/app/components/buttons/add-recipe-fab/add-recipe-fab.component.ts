import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { AddRecipeModalComponent } from "@components/modals/add-recipe-modal/add-recipe-modal.component";

@Component({
	selector: "app-add-recipe-fab",
	templateUrl: "./add-recipe-fab.component.html",
	styleUrls: ["./add-recipe-fab.component.scss"]
})
export class AddRecipeFabComponent {
	constructor(public dialog: MatDialog) {}

	public openDialog(): void {
		const dialogRef = this.dialog.open(AddRecipeModalComponent, {});

		dialogRef.afterClosed().subscribe(result => {
			console.log("The dialog was closed");
		});
	}
}
