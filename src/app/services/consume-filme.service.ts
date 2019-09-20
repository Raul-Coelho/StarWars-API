import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../Model/Film';


@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  public specified:Film[];

  private readonly API = `${environment.API}/films/`;

  private NEXT = `${environment.API_CHARAC}`;

  constructor(private http: HttpClient) {}

  async getFilms():Promise<Film>{
    return await this.http.get<Film>(this.API).toPromise();
  }

  async getSpecified(filmsArray:string[]){
    this.specified = [];
    filmsArray.forEach(async element => {
      this.NEXT = element
      await this.http.get<Film>(this.NEXT).toPromise().then(retorno =>{
        this.specified.push(retorno);
      }).catch(erro =>{
        console.log
      })
    });
    return this.specified;
  }
  
}