import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Planets } from 'src/app/Model/Planets';


@Injectable({
  providedIn: 'root'
})
export class ConsumePlanetsService {

  public characters:Planets[];

  private readonly API = `${environment.API}/planets/`;

  private NEXT = `${environment.API_CHARAC}`;

  constructor(private http:HttpClient) { }

  async getPlanets(charactersArray:string[]){
    this.characters = [];
    charactersArray.forEach(async element => {
      this.NEXT = element
      await this.http.get<Planets>(this.NEXT).toPromise().then(retorno =>{
        this.characters.push(retorno);
      }).catch(erro =>{
        console.log
      })
    });
    return this.characters;
  }
}
