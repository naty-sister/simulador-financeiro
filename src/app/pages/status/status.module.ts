import { StatusComponent } from './status.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ReprovadoComponent } from './reprovado/reprovado.component';
import { AprovadoComponent } from './aprovado/aprovado.component';


@NgModule({
  declarations: [
    StatusComponent,
    ReprovadoComponent,
    AprovadoComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,

  ]
})
export class StatusModule { }
