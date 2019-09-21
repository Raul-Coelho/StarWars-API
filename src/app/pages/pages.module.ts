import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ListCardComponent } from './list-card/list-card.component';
import { MatListModule } from '@angular/material/list';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CardCharactersComponent } from '../Components/card-characters/card-characters.component';
import { CardPlanetsComponent } from '../Components/card-planets/card-planets.component';
import { CardSpeciesComponent } from '../Components/card-species/card-species.component';
import { CardVehiclesComponent } from '../Components/card-vehicles/card-vehicles.component';
import { CardStarshipsComponent } from '../Components/card-starships/card-starships.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalCharacComponent } from 'src/app/Components/modal-charac/modal-charac.component';
import { ModalPlanetsComponent } from '../Components/modal-planets/modal-planets.component';
import { ModalSpeciesComponent } from '../Components/modal-species/modal-species.component';
import { ModalVehiclesComponent } from '../Components/modal-vehicles/modal-vehicles.component';

const routes: Routes = [
  {
    path: 'detail/film', component: DetailFilmComponent
  },
  {
    path: '', component: ListCardComponent
  }
]

@NgModule({
  declarations: [
    DetailFilmComponent,
    CardCharactersComponent,
    CardPlanetsComponent,
    CardSpeciesComponent,
    CardVehiclesComponent,
    CardStarshipsComponent,
    ModalCharacComponent,
    ModalPlanetsComponent,
    ModalSpeciesComponent,
    ModalVehiclesComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    ModalCharacComponent,
    ModalPlanetsComponent,
    ModalSpeciesComponent,
    ModalVehiclesComponent,

  ],
  exports: [RouterModule],
  providers: [

  ]
})

export class PagesModule { }