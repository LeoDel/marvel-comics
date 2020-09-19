import {Injectable} from '@angular/core';
import {Comic} from './comic';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {COMICS} from './mock-comics';

@Injectable({
  providedIn: 'root'
})
export class MarvelComicsService {

  private comicsUrl = 'https://gateway.marvel.com/v1/public/';
  private httpParams = new HttpParams().set('apikey', 'c36291d9364ba5f07ed04e935c20d28a');
  private httpOptions = {
    headers: new HttpHeaders({
      Accept: '*/*',
      apikey: 'c36291d9364ba5f07ed04e935c20d28a'
    }),
  };


  constructor(
    private http: HttpClient
  ) {
  }

  simpleGetComics(): Comic[] {
    return COMICS;
  }

  getComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(`${this.comicsUrl}comics`, this.httpOptions)
      .pipe(
        tap(_ => console.log('got them comics')),
        catchError(this.handleError<Comic[]>('getComics', []))
      );
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): any => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // return of(result as T);
    };
  }
}
