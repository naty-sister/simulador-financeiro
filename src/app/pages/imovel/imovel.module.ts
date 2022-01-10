import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImovelRoutingModule } from './imovel-routing.module';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ImovelRoutingModule
  ]
})
export class ImovelModule { }
