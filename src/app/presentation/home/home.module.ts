import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PublicationComponent } from './publication/publication.component';
import { HeaderComponent } from '../shared/header/header.component';
import { NewPublicationComponent } from './new-publication/new-publication.component';
import { NewPublicationMediator } from 'src/app/application/Mediator/New-publication-mediator';

@NgModule({
  declarations: [
    HomeComponent, PublicationComponent, HeaderComponent, NewPublicationComponent
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
  providers: [NewPublicationMediator], // Agrega NewPublicationMediator como proveedor aquí
})
export class HomeModule {}
