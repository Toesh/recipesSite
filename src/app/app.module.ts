import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ConfigService } from './REST/config/config.service';
import { AppComponent } from './app.component';
import { ConfigComponent } from './components/config/config.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({ serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR }),
    AppRoutingModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
