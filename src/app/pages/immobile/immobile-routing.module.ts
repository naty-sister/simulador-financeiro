import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImmobileComponent } from './immobile.component';

const routes: Routes = [
  {path: 'immobile', component: ImmobileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImmobileRoutingModule { }
