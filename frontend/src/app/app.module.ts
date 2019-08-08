import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
	MatButtonModule,
	MatCardModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDividerModule,
	MatIconModule,
	MatInputModule,
	MatRadioModule,
	MatSelectModule,
	MatTableModule
} from "@angular/material";
import { MatExpansionModule } from "@angular/material/expansion";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AddRecipeFabComponent } from "@components/buttons/add-recipe-fab/add-recipe-fab.component";
import { TagFieldComponent } from "@components/form-fields/tag-field/tag-field.component";
import { MainMenuComponent } from "@components/main-menu/main-menu.component";
import { AddRecipeModalComponent } from "@components/modals/add-recipe-modal/add-recipe-modal.component";
import { RecipeComponent } from "@components/recipe/recipe.component";

import { ConfigComponent } from "@pages/config/config.component";
import { OverviewComponent } from "@pages/overview/overview.component";

import { ApiService } from "@services/api.service";

import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppEffects } from "./app.effects";
import { metaReducers, reducers } from "./reducers";

@NgModule({
	declarations: [
		AppComponent,
		ConfigComponent,
		RecipeComponent,
		MainMenuComponent,
		AddRecipeFabComponent,
		OverviewComponent,
		AddRecipeModalComponent,
		TagFieldComponent
	],
	entryComponents: [AddRecipeModalComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		EffectsModule.forRoot([AppEffects]),
		BrowserAnimationsModule,
		MatButtonModule,
		MatExpansionModule,
		ReactiveFormsModule,
		MatCardModule,
		MatInputModule,
		MatSelectModule,
		MatChipsModule,
		MatDatepickerModule,
		MatRadioModule,
		MatDividerModule,
		MatIconModule,
		MatTableModule
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule {}
