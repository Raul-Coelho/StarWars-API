import { Injectable } from '@angular/core';
import { Vehicle } from '../Model/Vehicle';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumeVehiclesService {

  public vehicle:Vehicle[];

  private readonly API = `${environment.API}/vehicle/`;

  private NEXT = `${environment.API_CHARAC}`;

  constructor(private http:HttpClient) { }

  async getVehicles(vehiclesArray:string[]){
    this.vehicle = [];
    vehiclesArray.forEach(async element => {
      this.NEXT = element
      await this.http.get<Vehicle>(this.NEXT).toPromise().then(retorno =>{
        this.vehicle.push(retorno);
      }).catch(erro =>{
        console.log
      })
    });
    return this.vehicle;
  }
}
