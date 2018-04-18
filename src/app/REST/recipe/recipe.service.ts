import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { Config, ConfigService } from '../config/config.service';

@Injectable()
export class RecipeService {
  recipeUrl;

  constructor(private http: HttpClient, private configService: ConfigService, private logger: NGXLogger) {
    this.recipeUrl = configService.getConfig();
  }

  getRecipe() {
    return this.http.get<Config>(this.recipeUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Handle client-side or network error.
      this.logger.error('An error occurred:', error.error.message);
    } else {
      // Handle unsuccessful response from backend.
      this.logger.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`, error.error);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable('Something bad happened; please try again later.');
  }
}
