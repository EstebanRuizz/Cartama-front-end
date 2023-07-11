import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PublicationComponent } from './publication/publication.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  declarations: [PublicationComponent, HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
