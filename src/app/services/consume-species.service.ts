import { Injectable } from '@angular/core';
import { Specie } from '../Model/Specie';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumeSpeciesService {

  public species:Specie[];

  private readonly API = `${environment.API}/species/`;

  private NEXT = `${environment.API_CHARAC}`;

  constructor(private http:HttpClient) { }

  async getPlanets(speciesArray:string[]){
    this.species = [];
    speciesArray.forEach(async element => {
      this.NEXT = element
      await this.http.get<Specie>(this.NEXT).toPromise().then(retorno =>{
        this.species.push(retorno);
      }).catch(erro =>{
        console.log
      })
    });
    return this.species;
  }
}
