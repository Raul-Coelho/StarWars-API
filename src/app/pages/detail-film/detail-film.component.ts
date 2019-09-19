import { Component, OnInit, Input } from '@angular/core';
import { ConsumeService } from '../../services/consume-filme.service';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/Model/Film';
import { Router } from '@angular/router';
import { ConsumeCharactersService } from '../../services/consume-characters.service';
import { People } from '../../Model/People';
import { ConsumePlanetsService } from '../../services/consume-planets.service';
import { Planets } from 'src/app/Model/Planets';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  public film:Film;
  public characters:People[];
  public planets: Planets;
  public headers: Headers;
  public nav:any;

  constructor(
    private consumePlanetsService:ConsumePlanetsService,
    private consume: ConsumeService,
    private consumeCharactersService:ConsumeCharactersService, 
    private http:HttpClient,
    private router: Router,
    ) 
    
    { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    // RECEBENDO FILME
    this.nav = this.router.getCurrentNavigation();
    
  }
  

  ngOnInit() {
    this.film = this.nav.extras.state.selectedFilm;
    this.consumeCharactersService.getCharacters(this.film['characters']).then( res =>{
      this.characters = res;
      console.log(this.characters)
    })

    console.log(this.consumePlanetsService.getPlanets(this.film['planets']).then(res =>{
      this.planets = res;
      console.log(this.planets)
    }))
  }

}
