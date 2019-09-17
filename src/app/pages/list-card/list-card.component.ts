import { Component, OnInit } from '@angular/core';
import { ConsumeService } from '../../services/consume.service';
import { Film } from 'src/app/Model/Film';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  public films:Film[];

  constructor(private consumeService: ConsumeService) { 
    
  }

  ngOnInit() {
    this.consumeService.getFilms().then(
      res => {
        this.films = res['results'];
        console.log(res['results'])
      }
    )
  }

}
