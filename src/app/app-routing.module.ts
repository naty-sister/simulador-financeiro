import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path:'', loadChildren: () => import('./pages/bidder/bidder.module').then(m => m.BidderModule)},
  {path:'', loadChildren: () => import('./pages/immobile/immobile.module').then(m => m.ImmobileModule)},
  {path:'', loadChildren: () => import('./pages/status/status.module').then(m => m.StatusModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
