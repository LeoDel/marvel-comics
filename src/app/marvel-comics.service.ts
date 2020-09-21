import {Injectable} from '@angular/core';
import {Comic} from './comic';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Character} from './character';

@Injectable({
  providedIn: 'root'
})
export class MarvelComicsService {

  private comicsUrl = 'https://gateway.marvel.com/v1/public/';

  constructor(
    private http: HttpClient
  ) {
  }

  // simpleGetComics(): Comic[] {
  //   return COMICS;
  // }

  getComics(limit, offset, orderBy, character): Observable<object> {
    console.log(`getComics(${limit}, ${offset}, ${orderBy}, ${character})`);
    let httpOptions;
    if (character) {
      let characterId = character ? [character] : [];
      httpOptions = {
        headers: new HttpHeaders({
          Accept: '*/*'
        }),
        params: new HttpParams()
          .append('apikey', 'c36291d9364ba5f07ed04e935c20d28a')
          .append('format', 'comic')
          .append('formatType', 'comic')
          .append('orderBy', orderBy ? orderBy : '')
          .append('characters', characterId ? characterId.toString() : '')
          .append('limit', limit)
          .append('offset', offset)
      };
    } else {
      httpOptions = {
        headers: new HttpHeaders({
          Accept: '*/*'
        }),
        params: new HttpParams()
          .append('apikey', 'c36291d9364ba5f07ed04e935c20d28a')
          .append('format', 'comic')
          .append('formatType', 'comic')
          .append('orderBy', orderBy ? orderBy : '')
          // .append('characters', characterId ? characterId.toString() : '')
          .append('limit', limit)
          .append('offset', offset)
      };
    }

    return this.http.get(`${this.comicsUrl}comics`, httpOptions)
      .pipe(
        map(response => {
          const result = response['data'];
          return result;
        }),
        tap(_ => console.log('got them comics'))
      );
  }

  searchCharacter(characterName: string): Observable<Character[]> {
    if (!characterName.trim()) {
      return of([]);
    }
    let httpOptions = {
      headers: new HttpHeaders({
        Accept: '*/*'
      }),
      params: new HttpParams()
        .append('apikey', 'c36291d9364ba5f07ed04e935c20d28a')
        .append('nameStartsWith', characterName)
    };
    return this.http.get(`${this.comicsUrl}characters`, httpOptions)
      .pipe(
        map((response: any) => response.data.results)
      );
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): any => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
    };
  }
}
