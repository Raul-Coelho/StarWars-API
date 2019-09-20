
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CardComponent } from './Components/card-film/card.component';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { ListCardComponent } from './pages/list-card/list-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ModalCharacComponent } from './Components/modal-charac/modal-charac.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    ListCardComponent,
  ],
  imports: [
    MatListModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
