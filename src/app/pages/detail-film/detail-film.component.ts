import { Component, OnInit, Input } from '@angular/core';
import { ConsumeService } from '../../services/consume-filme.service';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/Model/Film';
import { Router } from '@angular/router';
import { ConsumeCharactersService } from '../../services/consume-characters.service';
import { People } from '../../Model/People';
import { ConsumePlanetsService } from '../../services/consume-planets.service';
import { Planet } from '../../Model/Planet';
import { ConsumeSpeciesService } from '../../services/consume-species.service';
import { Specie } from '../../Model/Specie';
import { ConsumeStarshipsService } from '../../services/consume-starships.service';
import { Starships } from '../../Model/Starships';
import { ConsumeVehiclesService } from 'src/app/services/consume-vehicles.service';
import { Vehicle } from '../../Model/Vehicle';

import Swal from 'sweetalert2'
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ModalCharacComponent } from 'src/app/Components/modal-charac/modal-charac.component';
import { ModalPlanetsComponent } from 'src/app/Components/modal-planets/modal-planets.component';
import { ModalSpeciesComponent } from '../../Components/modal-species/modal-species.component';
import { ModalVehiclesComponent } from 'src/app/Components/modal-vehicles/modal-vehicles.component';
import { ModalStarshipsComponent } from 'src/app/Components/modal-starships/modal-starships.component';


@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  public film: Film;
  public characters: People[];
  public chart:People;
  public planets: Planet[];
  public species: Specie[];
  public starships: Starships[];
  public vehicles: Vehicle[];
  public headers: Headers;
  public nav: any;

  modalRef: MDBModalRef;

  constructor(
    private consume: ConsumeService,
    private consumePlanetsService: ConsumePlanetsService,
    private consumeCharactersService: ConsumeCharactersService,
    private consumeSpeciesService: ConsumeSpeciesService,
    private consumeStarshipsService: ConsumeStarshipsService,
    private consumeVehiclesService: ConsumeVehiclesService,
    public modalService: MDBModalService,
    private http: HttpClient,
    private router: Router,

  ) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    // RECEBENDO FILME
    this.nav = this.router.getCurrentNavigation();

  }

  openModalChart(recivedChart:People){
    this.modalRef = this.modalService.show(ModalCharacComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-side modal-top-right',
        containerClass: 'right',
        animated: true,
        data: {
          heading: 'Character',
          people: recivedChart      }
    });
  }

  openModalPlanet(recivedPlanet:Planet){
    this.modalRef = this.modalService.show(ModalPlanetsComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-side modal-top-right',
        containerClass: 'right',
        animated: true,
        data: {
          heading: 'Planet',
          planet: recivedPlanet      
        }
    });
  }

  openModalSpecie(recivedSpecie:Specie){
    this.modalRef = this.modalService.show(ModalSpeciesComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-side modal-top-right',
        containerClass: 'right',
        animated: true,
        data: {
          heading: 'Specie',
          specie: recivedSpecie      
        }
    });
  }

  openModalVehicles(recivedVehicle:Vehicle){
    this.modalRef = this.modalService.show(ModalVehiclesComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-side modal-top-right',
        containerClass: 'right',
        animated: true,
        data: {
          heading: 'Vehicles',
          vehicle: recivedVehicle      
        }
    });
  }

  openModalStarship(recivedStarship:Starships){
    this.modalRef = this.modalService.show(ModalStarshipsComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-side modal-top-right',
        containerClass: 'right',
        animated: true,
        data: {
          heading: 'Vehicles',
          starship: recivedStarship    
        }
    });
  }

  ngOnInit() {
    this.film = this.nav.extras.state.selectedFilm;
    this.consumeCharactersService.getCharacters(this.film['characters']).then(res => {
      this.characters = res;
    }).catch(res =>{
      console.log
    })

    this.consumePlanetsService.getPlanets(this.film['planets']).then(res => {
      this.planets = res;
    }).catch(res =>{
      console.log
    })

    this.consumeSpeciesService.getSpecies(this.film['species']).then(res =>{
      this.species = res;
    }).catch(res =>{
      console.log
    })

    this.consumeStarshipsService.getStarships(this.film['starships']).then(res =>{
      this.starships = res;
    }).catch(res =>{
      console.log
    })

    this.consumeVehiclesService.getVehicles(this.film['vehicles']).then(res =>{
      this.vehicles = res;
    }).catch(res => {
      console.log
    })
  }
}
