import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProponenteRoutingModule } from './proponente-routing.module';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ProponenteRoutingModule
  ]
})
export class ProponenteModule { }
