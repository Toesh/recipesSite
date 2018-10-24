import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {NGXLogger} from 'ngx-logger';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
	recipeUrl: string;
}

@Injectable()
export class ConfigService {
	configUrl = 'assets/config.json';

	constructor(
		private http: HttpClient,
		// private logger: NGXLogger // TODO: Fix logger (2.4 > 3.0.5)
	) {
	}

	getConfig() {
		return this.http.get<Config>(this.configUrl)
			.pipe(
				retry(3),
				catchError(this.handleError),
			);
	}

	getConfigResponse(): Observable<HttpResponse<Config>> {
		return this.http.get<Config>(
			this.configUrl, { observe: 'response' });
	}

	private handleError(error: HttpErrorResponse) {
		console.log(error);
		if (error.error instanceof ErrorEvent) {
			// Handle client-side or network error.
			// this.logger.error('An error occurred:', error.error.message); // TODO: Fix logger (2.4 > 3.0.5)
		} else {
			// Handle unsuccessful response from backend.
			// this.logger.error(
			//   `Backend returned code ${error.status}, ` +
			//   `body was: ${error.error}`, error.error); // TODO: Fix logger (2.4 > 3.0.5)
		}
		// return an ErrorObservable with a user-facing error message
		return throwError('Something bad happened; please try again later.'); // TODO: check if this still works as expected (rxjs 5 > 6)
	}
}
