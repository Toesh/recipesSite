import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AccordionModule, CollapseModule} from 'ngx-bootstrap';
// import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import {AppRoutingModule} from './app-routing.module';
import {ConfigService} from '@rest/config/config.service';
import {AppComponent} from './app.component';
import {ConfigComponent} from './components/config/config.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {RecipeComponent} from './components/recipe/recipe.component';
import {FormsModule} from '@angular/forms';

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
    // TODO: Fix logger (2.4 > 3.0.5)
    // LoggerModule.forRoot({ serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR }),
    AppRoutingModule,
    CollapseModule.forRoot(), AccordionModule.forRoot(),
    FormsModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
