import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationComponent } from './publication/publication.component';
import { HomeComponent } from './home.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'publication', component: PublicationComponent },
      { path: 'reservation', component: ReservationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
