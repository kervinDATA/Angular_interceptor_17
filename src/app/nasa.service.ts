import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NasaService {


  private apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=KnJgM5n3or1YygPucYh53hZQQL99DvEfODIG7qw0';

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
