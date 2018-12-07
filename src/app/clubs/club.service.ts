import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { IClubs } from './clubs';

@Injectable({
	providedIn: 'root',
})

export class ClubService {
	private clubUrl = 'api/clubs/clubs.json';

	constructor(private http: HttpClient){}

	getProducts(): Observable<IClubs[]> {
		return this.http.get<IClubs[]>(this.clubUrl).pipe(
			tap(data => console.log('All:' + JSON.stringify(data))),
			catchError(this.handleError)
			);
	}

	private handleError(err: HttpErrorResponse){
		let errorMessage = '';
		if(err.error instanceof ErrorEvent){
			errorMessage = `An error occurred: ${err.error.message}`;
		}else{
			errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
		}
		console.log(errorMessage);
		return throwError(errorMessage);
	}
}
