import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Config, ConfigService } from '../config/config.service';

@Injectable()
export class RecipeService {
	recipeUrl = 'assets/recipe.json';

	constructor(
		private http: HttpClient,
		private configService: ConfigService,
		private logger: NGXLogger,
	) {
		// this.recipeUrl = configService.getConfig(); //TODO: Get url from settings
	}

	getRecipe() {
		return this.http.get<Config>(this.recipeUrl)
			.pipe(
				retry(3),
				catchError(this.handleError),
			);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// Handle client-side or network error.
			this.logger.error('An error occurred:', error.error.message);
		} else {
			// Handle unsuccessful response from backend.
			this.logger.error(`Backend returned code ${error.status}, body was: ${error.error}`, error.error);
		}

		// return an ErrorObservable with a user-facing error message
		return throwError('Something bad happened; please try again later.'); // TODO: check if this still works as expected (rxjs 5 > 6)
	}
}
