import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Planet } from 'src/app/Model/Planet';


@Injectable({
  providedIn: 'root'
})
export class ConsumePlanetsService {

  public characters:Planet[];

  private readonly API = `${environment.API}/planets/`;

  private NEXT = `${environment.API_CHARAC}`;

  constructor(private http:HttpClient) { }

  async getPlanets(charactersArray:string[]){
    this.characters = [];
    charactersArray.forEach(async element => {
      this.NEXT = element
      await this.http.get<Planet>(this.NEXT).toPromise().then(retorno =>{
        this.characters.push(retorno);
      }).catch(erro =>{
        console.log
      })
    });
    return this.characters;
  }
}
