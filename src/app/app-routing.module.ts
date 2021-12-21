import { HomeComponent } from './../../../../natyfitness/src/app/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidderComponent } from './pages/bidder/bidder.component';
import { ImmobileComponent } from './pages/immobile/immobile.component';
import { StatusComponent } from './pages/status/status.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'bidder', component: BidderComponent},
  {path: 'immobile', component: ImmobileComponent},
  {path: 'status', component: StatusComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
