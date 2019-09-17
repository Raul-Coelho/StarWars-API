import { Component, OnInit } from '@angular/core';
import { ConsumeService } from '../../services/consume.service';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/Model/Film';

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
      res => {
        this.film = res;
      console.log(this.film);
      }
      
    ).catch((res) => console.log('Erro!:'+ res))
  }

}
