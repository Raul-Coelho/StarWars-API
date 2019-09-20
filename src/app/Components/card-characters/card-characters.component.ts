import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../Model/People';

@Component({
  selector: 'app-card-characters',
  templateUrl: './card-characters.component.html',
  styleUrls: ['./card-characters.component.scss']
})
export class CardCharactersComponent implements OnInit {

  @Input() chart:People;

  constructor() { }

  ngOnInit() {
  }

}
