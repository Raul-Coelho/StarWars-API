import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DetailFilmComponent } from 'src/app/pages/detail-film/detail-film.component';
import { Film } from 'src/app/Model/Film';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() film = Film;

  constructor(public router:Router) { }

  ngOnInit() {
  
  }

  details(selectedFilm:Film){
    this.router.navigateByUrl('detail/film',{state:{selectedFilm:selectedFilm}});
    // console.log(selectedFilm)
  }
  

}
