import { Injectable } from '@angular/core';
import { Starships } from '../Model/Starships';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumeStarshipsService {

  public starship:Starships[];

  private readonly API = `${environment.API}/starships/`;

  private NEXT = `${environment.API_CHARAC}`;

  constructor(private http:HttpClient) { }

  async getStarships(starshipsArray:string[]){
    this.starship = [];
    starshipsArray.forEach(async element => {
      this.NEXT = element
      await this.http.get<Starships>(this.NEXT).toPromise().then(retorno =>{
        this.starship.push(retorno);
      }).catch(erro =>{
        console.log
      })
    });
    return this.starship;
  }
}
