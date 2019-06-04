import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
	recipeUrl: string;
}

@Injectable()
export class ConfigService {
	public configUrl = 'assets/config.json';

	constructor(
		private http: HttpClient
	) {
	}

	public getConfig() {
		const retries = 3;

		return this.http.get<Config>(this.configUrl)
			.pipe(
				retry(retries),
				catchError(this.handleError)
			);
	}

	public getConfigResponse(): Observable<HttpResponse<Config>> {
		return this.http.get<Config>(
			this.configUrl, { observe: 'response' });
	}

	private handleError(error: HttpErrorResponse) {
		console.log(error);
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
