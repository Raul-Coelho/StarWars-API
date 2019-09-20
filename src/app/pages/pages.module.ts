import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ListCardComponent } from './list-card/list-card.component';
import { MatListModule } from '@angular/material/list';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppModule } from '../app.module';
import { CardCharactersComponent } from '../components/card-characters/card-characters.component';
import { CardPlanetsComponent } from '../components/card-planets/card-planets.component';
import { CardSpeciesComponent } from '../components/card-species/card-species.component';
import { CardVehiclesComponent } from '../components/card-vehicles/card-vehicles.component';
import { CardStarshipsComponent } from '../components/card-starships/card-starships.component';



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

  ],
  imports: [
  CommonModule,
    RouterModule,
    MatListModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PagesModule { }
