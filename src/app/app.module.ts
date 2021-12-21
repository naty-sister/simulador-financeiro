import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SharedComponent } from './shared/shared.component';
import { ImmobileComponent } from './pages/immobile/immobile.component';
import { BidderComponent } from './pages/bidder/bidder.component';
import { HeaderComponent } from './shared/componentes/header/header.component';
import { StatusComponent } from './pages/status/status.component';




@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    ImmobileComponent,
    BidderComponent,
    HeaderComponent,
    StatusComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
