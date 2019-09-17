import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../Model/Film';


@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  private readonly API = `${environment.API}/1/`;

  constructor(private http: HttpClient) {

   }

  async read():Promise<Film>{
    return await this.http.get<Film>(this.API).toPromise();
  }
}