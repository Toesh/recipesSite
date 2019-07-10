import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material";
import { MatExpansionModule } from "@angular/material/expansion";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { ConfigService } from "@rest/config/config.service";

import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppEffects } from "./app.effects";
import { ConfigComponent } from "./components/config/config.component";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { RecipeComponent } from "./components/recipe/recipe.component";
import { metaReducers, reducers } from "./reducers";

@NgModule({
	declarations: [
		AppComponent,
		ConfigComponent,
		RecipeComponent,
		MainMenuComponent
	],
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
		MatExpansionModule
	],
	providers: [ConfigService],
	bootstrap: [AppComponent]
})
export class AppModule {}
