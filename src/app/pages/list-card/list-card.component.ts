import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  public items:number[];

  constructor() { }

  ngOnInit() {
    this.items = [
      1,2,3,4,5,6
    ];
  }

}
