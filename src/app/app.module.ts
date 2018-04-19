import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ConfigService } from './REST/config/config.service';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({ serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR })
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
