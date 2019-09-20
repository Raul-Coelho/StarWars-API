import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../Model/Vehicle';

@Component({
  selector: 'app-card-vehicles',
  templateUrl: './card-vehicles.component.html',
  styleUrls: ['./card-vehicles.component.scss']
})
export class CardVehiclesComponent implements OnInit {

  @Input() vehicle:Vehicle;

  constructor() { }

  ngOnInit() {
  }

}
