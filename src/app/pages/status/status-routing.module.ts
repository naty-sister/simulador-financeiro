import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovadoComponent } from './aprovado.component';
import { ReprovadoComponent } from './reprovado.component';

const routes: Routes = [
  {path: 'aprovado', component: AprovadoComponent},
  {path: 'reprovado', component: ReprovadoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
