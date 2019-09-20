import { Component, OnInit, Input } from '@angular/core';
import { Starships } from '../../Model/Starships';

@Component({
  selector: 'app-card-starships',
  templateUrl: './card-starships.component.html',
  styleUrls: ['./card-starships.component.scss']
})
export class CardStarshipsComponent implements OnInit {

  @Input() starship:Starships;

  constructor() { }

  ngOnInit() {
  }

}
