import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../Model/Film';


@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  private readonly API = `${environment.API}/films/`;

  constructor(private http: HttpClient) {}

  async getFilms():Promise<Film>{
    return await this.http.get<Film>(this.API).toPromise();
  }
}