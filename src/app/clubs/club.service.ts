import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IClubs } from './clubs';

@Injectable({
	providedIn: 'root',
})

export class ClubService {
	private clubUrl = 'api/clubs/clubs.json';

	constructor(private http: HttpClient){}

	getClubs(): Observable<IClubs[]> {
		return this.http.get<IClubs[]>(this.clubUrl).pipe(
			tap(data => console.log('All:' + JSON.stringify(data))),
			catchError(this.handleError)
			);
  }

  getClub(id: number): Observable<IClubs | undefined> {
    return this.getClubs().pipe(
      map((clubs: IClubs[]) => clubs.find(p => p.clubId === id))
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
