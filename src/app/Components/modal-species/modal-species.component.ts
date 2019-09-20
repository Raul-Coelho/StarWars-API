import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { ConsumeService } from '../../services/consume-filme.service';
import { ConsumeSpeciesService } from '../../services/consume-species.service';
import { ConsumeCharactersService } from '../../services/consume-characters.service';
import { Specie } from '../../Model/Specie';
import { ConsumePlanetsService } from '../../services/consume-planets.service';

@Component({
  selector: 'app-modal-species',
  templateUrl: './modal-species.component.html',
  styleUrls: ['./modal-species.component.scss']
})
export class ModalSpeciesComponent implements OnInit {

  heading: string;
  specie:Specie[];

  constructor(
    public modalRef: MDBModalRef,
    public serviceFilms:ConsumeService,
    public consumePlanetsService: ConsumePlanetsService,
    public consumeSpeciesService: ConsumeSpeciesService,
    public consumeCharactersService: ConsumeCharactersService,
    ) { }

  ngOnInit() {

    console.log(this.specie)

    this.serviceFilms.getSpecified(this.specie['films']).then(res =>{
      this.specie['films'] = res;
      console.log(this.specie['films'])
    })

    this.consumePlanetsService.getSpecified(this.specie['homeworld']).then(res =>{
      this.specie['homeworld'] = res;
      console.log(this.specie['homeworld'])
    })

    this.consumeCharactersService.getCharacters(this.specie['people']).then(res =>{
      this.specie['people'] = res;
      console.log(this.specie['people'])
    })
  }

}
