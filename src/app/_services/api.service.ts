import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  urlProd: string = 'https://garagerestapi-a1ad312e44d1.herokuapp.com/api/'
  urlLocal: string = 'http://localhost:8000/api/'

  getList(url: string): Observable<[]> {

    return this.http.get<[]>(`${this.urlProd}${url}` , {
      headers: new HttpHeaders({
        'Accept':  'application/ld+json'
      })
    })
  }

  getById(url: string, id: string):  Observable<any> {
    return this.http.get<[]>(`${this.urlProd}${url}/${id}`, {
      headers: new HttpHeaders({
        'Accept':  'application/ld+json'
      })
    })
  }

}
