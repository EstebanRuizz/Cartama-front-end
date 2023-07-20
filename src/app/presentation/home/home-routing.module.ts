import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationComponent } from './publication/publication.component';
import { NewPublicationComponent } from './new-publication/new-publication.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'publication', component: PublicationComponent },
      { path: 'new-publication', component: NewPublicationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
