import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../Model/Vehicle';
import { MDBModalRef } from 'angular-bootstrap-md';
import { ConsumeService } from '../../services/consume-filme.service';
import { ConsumeSpeciesService } from '../../services/consume-species.service';
import { ConsumeCharactersService } from '../../services/consume-characters.service';

@Component({
  selector: 'app-modal-vehicles',
  templateUrl: './modal-vehicles.component.html',
  styleUrls: ['./modal-vehicles.component.scss']
})
export class ModalVehiclesComponent implements OnInit {

  heading: string;
  vehicle:Vehicle[];

  constructor(
    public modalRef: MDBModalRef,
    public serviceFilms:ConsumeService,
    public consumeSpeciesService: ConsumeSpeciesService,
    private consumeCharactersService: ConsumeCharactersService,
    ) { }

  ngOnInit() {
    this.serviceFilms.getSpecified(this.vehicle['films']).then(res =>{
      this.vehicle['films'] = res;
    }).catch(res =>{
      console.log
    })
  }

}
