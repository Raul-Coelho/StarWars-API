import { Component, OnInit } from '@angular/core';
import { ConsumeService } from '../../services/consume.service';
import { Film } from '../../Model/Film';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  private film: Film;
  headers: Headers;

  constructor(public consume: ConsumeService, public http:HttpClient) { 
    this.headers = new Headers();
   this.headers.append('Content-Type', 'application/json');
  }

  ngOnInit() {
    this.consume.read().then(
      // res => this.film = res,
      res => console.log(res)
    ).catch((res) => console.log('Erro!:'+ res))
  }

}
