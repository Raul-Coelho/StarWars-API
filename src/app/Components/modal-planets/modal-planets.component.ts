import { Component, OnInit } from '@angular/core';
import { ConsumePlanetsService } from '../../services/consume-planets.service';
import { ConsumeService } from '../../services/consume-filme.service';
import { ConsumeSpeciesService } from '../../services/consume-species.service';
import { ConsumeCharactersService } from '../../services/consume-characters.service';
import { ConsumeStarshipsService } from '../../services/consume-starships.service';
import { ConsumeVehiclesService } from '../../services/consume-vehicles.service';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Planet } from 'src/app/Model/Planet';

@Component({
  selector: 'app-modal-planets',
  templateUrl: './modal-planets.component.html',
  styleUrls: ['./modal-planets.component.scss']
})
export class ModalPlanetsComponent implements OnInit {

  heading: string;
  planet:Planet[];

  constructor(
    public modalRef: MDBModalRef,
    public serviceFilms:ConsumeService,
    public consumeSpeciesService: ConsumeSpeciesService,
    private consumeCharactersService: ConsumeCharactersService,
    ) { }

  ngOnInit() {
    this.serviceFilms.getSpecified(this.planet['films']).then(res =>{
      this.planet['films'] = res;
    }).catch(res =>{
      console.log
    })

    this.consumeCharactersService.getCharacters(this.planet['residents']).then(res =>{
      this.planet['residents'] = res;
    }).catch(res =>{
      console.log
    })

  }

}
