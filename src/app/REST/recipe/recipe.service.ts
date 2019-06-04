import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

import {Config, ConfigService} from '../config/config.service';

@Injectable()
export class RecipeService {
	public recipeUrl = 'assets/recipe.json';

	constructor(
		private http: HttpClient,
		private configService: ConfigService,
	) {
		// this.recipeUrl = configService.getConfig(); //TODO: Get url from settings
	}

	public getRecipe() {
		const retries = 3;

		return this.http.get<Config>(this.recipeUrl)
			.pipe(
				retry(retries),
				catchError(this.handleError)
			);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// Handle client-side or network error.
			console.error('An error occurred:', error.error.message);
		} else {
			// Handle unsuccessful response from backend.
			console.error(`Backend returned code ${error.status}, body was: ${error.error}`, error.error);
		}

		// return an ErrorObservable with a user-facing error message
		return throwError('Something bad happened; please try again later.'); // TODO: check if this still works as expected (rxjs 5 > 6)
	}
}
