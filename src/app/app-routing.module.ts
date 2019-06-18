import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfigComponent } from "./components/config/config.component";
import { RecipeComponent } from "./components/recipe/recipe.component";

const routes: Routes = [
	{ path: "config", component: ConfigComponent },
	{ path: "home", component: RecipeComponent }
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
