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

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  public film: Film;
  public characters: People[];
  public planets: Planet[];
  public species: Specie[];
  public starships: Starships[];
  public headers: Headers;
  public nav: any;

  constructor(
    private consume: ConsumeService,
    private consumePlanetsService: ConsumePlanetsService,
    private consumeCharactersService: ConsumeCharactersService,
    private consumeSpeciesService: ConsumeSpeciesService,
    private consumeStarshipsService: ConsumeStarshipsService,
    private http: HttpClient,
    private router: Router,
  ) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    // RECEBENDO FILME
    this.nav = this.router.getCurrentNavigation();

  }


  ngOnInit() {
    this.film = this.nav.extras.state.selectedFilm;
    this.consumeCharactersService.getCharacters(this.film['characters']).then(res => {
      this.characters = res;
      console.log(this.characters)
    }).catch(res =>{
      console.log
    })

    this.consumePlanetsService.getPlanets(this.film['planets']).then(res => {
      this.planets = res;
      console.log(this.planets)
    }).catch(res =>{
      console.log
    })

    this.consumeSpeciesService.getSpecies(this.film['species']).then(res =>{
      this.species = res;
      console.log(this.species)
    }).catch(res =>{
      console.log
    })

    this.consumeStarshipsService.getStarships(this.film['starships']).then(res =>{
      this.starships = res;
      console.log(this.starships);
    }).catch(res =>{
      console.log
    })
  }
}
