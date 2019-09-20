import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../../Model/Specie';

@Component({
  selector: 'app-card-species',
  templateUrl: './card-species.component.html',
  styleUrls: ['./card-species.component.scss']
})
export class CardSpeciesComponent implements OnInit {

  @Input() specie:Specie;

  constructor() { }

  ngOnInit() {
  }

}
