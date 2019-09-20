import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/Model/Planet';

@Component({
  selector: 'app-card-planets',
  templateUrl: './card-planets.component.html',
  styleUrls: ['./card-planets.component.scss']
})
export class CardPlanetsComponent implements OnInit {

  @Input() planet:Planet;

  constructor() { }

  ngOnInit() {
  }

}
