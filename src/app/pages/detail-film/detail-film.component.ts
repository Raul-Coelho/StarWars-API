import { Component, OnInit, Input } from '@angular/core';
import { ConsumeService } from '../../services/consume-filme.service';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/Model/Film';
import { Router } from '@angular/router';
import { ConsumeCharactersService } from '../../services/consume-characters.service';
import { People } from '../../Model/People';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  public film:Film;
  public characters:People[];
  public headers: Headers;
  public nav:any;

  constructor(public consume: ConsumeService,private consumeCharactersService:ConsumeCharactersService, public http:HttpClient,private router: Router) { 
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
  }

}
