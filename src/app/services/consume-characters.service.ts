import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { People } from '../Model/People';
import { Film } from 'src/app/Model/Film';

@Injectable({
  providedIn: 'root'
})
export class ConsumeCharactersService {

  public characters:People[];

  private readonly API = `${environment.API}/people/`;

  private NEXT = `${environment.API_CHARAC}`;

  constructor(private http:HttpClient) { }

  async getCharacters(films:string[]){
    this.characters = [];
    films.forEach(async element => {
      this.NEXT = element
      await this.http.get<People>(this.NEXT).toPromise().then(retorno =>{
        this.characters.push(retorno);
      }).catch(erro =>{
        console.log
      })
    });
    return this.characters;
  }
}
