import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { IMaskModule } from 'angular-imask';
import { TituloComponent } from './componente/titulo/titulo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TituloComponent
  ],
  imports: [
    MaterialModule,
    IMaskModule
  ],
  export: [
    MaterialModule,
    IMaskModule,
    HeaderComponent,
    TituloComponent
  ]
})
export class SharedModule { }
