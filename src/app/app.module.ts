import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ConfigComponent} from './config/config.component';
import {RecipeComponent} from './recipe/recipe.component';

import {ConfigService} from './REST/config/config.service';
import {LogService} from './logging/log.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    LogService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
