import { Injectable } from '@angular/core';
import { Launch } from '../models/launch';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class FlightService {
  private flightsUrl = 'https://api.spacexdata.com/v2/launches';

  constructor(private _http: HttpClient) { }

  /** GET flights from the server */
  getFlights(): Observable<Launch[]> {
    return this._http.get<any>(this.flightsUrl);
  }

  /* GET Launch by Flight Number */
  getLaunch(flight_number: number): Observable<Launch> {
    return this._http.get<any>(this.flightsUrl + "/" + flight_number);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
