import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConfigComponent } from "@pages/config/config.component";
import { OverviewComponent } from "@pages/overview/overview.component";

const routes: Routes = [
	{ path: "config", component: ConfigComponent },
	{ path: "", component: OverviewComponent }
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
