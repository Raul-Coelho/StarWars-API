import { Component, OnInit } from '@angular/core';
import { Starships } from 'src/app/Model/Starships';
import { MDBModalRef } from 'angular-bootstrap-md';
import { ConsumeService } from '../../services/consume-filme.service';
import { ConsumeSpeciesService } from '../../services/consume-species.service';
import { ConsumeCharactersService } from '../../services/consume-characters.service';

@Component({
  selector: 'app-modal-starships',
  templateUrl: './modal-starships.component.html',
  styleUrls: ['./modal-starships.component.scss']
})
export class ModalStarshipsComponent implements OnInit {

  heading: string;
  starship:Starships[];

  constructor(
    public modalRef: MDBModalRef,
    public serviceFilms:ConsumeService,
    public consumeSpeciesService: ConsumeSpeciesService,
    private consumeCharactersService: ConsumeCharactersService,
    ) { }

  ngOnInit() {
    this.serviceFilms.getSpecified(this.starship['films']).then(res =>{
      this.starship['films'] = res;
      console.log(this.starship['films'])
    })

    this.consumeCharactersService.getCharacters(this.starship['pilots']).then(res =>{
      this.starship['pilots'] = res;
      console.log(this.starship['pilots'])
    })
  }

}
