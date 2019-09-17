import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DetailFilmComponent } from './pages/detail-film/detail-film.component';
import { AppComponent } from './app.component';
import { ListCardComponent } from './pages/list-card/list-card.component';
import { PagesModule } from './pages/pages.module';


const routes: Routes = [
  {
    path: '', redirectTo:'./PagesModule/ListCardComponent', pathMatch:'full'
  },
  {
    path:'detail/film', redirectTo:'./PagesModule/DetailFilmComponent', pathMatch:'full'
  }

];

@NgModule({
  imports: [
  CommonModule,
    PagesModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
