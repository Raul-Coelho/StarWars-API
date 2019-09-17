import { Component, OnInit } from '@angular/core';
import { ConsumeService } from '../../services/consume-filme.service';
import { Film } from 'src/app/Model/Film';
import { ConsumeCharactersService } from '../../services/consume-characters.service';
import { People } from '../../Model/People';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  public films:Film[];

  constructor(private consumeService: ConsumeService,private charactersService:ConsumeCharactersService) { 
    
  }

  ngOnInit() {
    this.consumeService.getFilms().then(
      res => {
        this.films = res['results'];
      }
    )
  }

}
