import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRecipe } from "@interfaces/recipe.interface";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class ApiService {
	public endpoint = "http://0.0.0.0:3000/api";
	public headers = new HttpHeaders().set("Content-Type", "application/json");

	constructor(private http: HttpClient) {}

	// Error handling
	public static errorMgmt(error: HttpErrorResponse) {
		let errorMessage = "";

		error.error instanceof ErrorEvent
			? (errorMessage = error.error.message)
			: (errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`);

		console.log(errorMessage);

		return throwError(errorMessage);
	}

	// Add recipe
	public addRecipe(data: IRecipe): Observable<any> {
		const API_URL = `${this.endpoint}/add-recipe`;

		return this.http.post(API_URL, data).pipe(catchError(ApiService.errorMgmt));
	}

	// Get all recipes
	public getrecipes() {
		return this.http.get(`${this.endpoint}`);
	}

	// Get recipe
	public getRecipe(id): Observable<any> {
		const API_URL = `${this.endpoint}/read-recipe/${id}`;

		return this.http.get(API_URL, { headers: this.headers }).pipe(
			map((res: Response) => {
				return res || {};
			}),
			catchError(ApiService.errorMgmt)
		);
	}

	// Update recipe
	public UpdateRecipe(id, data: IRecipe): Observable<any> {
		const API_URL = `${this.endpoint}/update/${id}`;

		return this.http
			.put(API_URL, data, { headers: this.headers })
			.pipe(catchError(ApiService.errorMgmt));
	}

	// Delete recipe
	public deleteRecipe(id): Observable<any> {
		const API_URL = `${this.endpoint}/delete-recipe/${id}`;

		return this.http.delete(API_URL).pipe(catchError(ApiService.errorMgmt));
	}
}
