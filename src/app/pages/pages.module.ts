import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ListCardComponent } from './list-card/list-card.component';



const routes: Routes = [
  {
    path: 'detail/film', component:DetailFilmComponent
  },
  {
    path:'', component:ListCardComponent
  }
]


@NgModule({
  declarations: [DetailFilmComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PagesModule { }
