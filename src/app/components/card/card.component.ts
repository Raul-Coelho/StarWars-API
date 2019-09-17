import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailFilmComponent } from 'src/app/pages/detail-film/detail-film.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  
  }

  details(){
    this.router.navigate(['detail/film']);
  }

}
