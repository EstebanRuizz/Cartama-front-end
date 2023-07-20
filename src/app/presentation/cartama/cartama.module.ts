import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartamaRoutingModule } from './cartama-routing.module';
import { CartamaComponent } from './cartama.component';


@NgModule({
  declarations: [
    CartamaComponent
  ],
  imports: [
    CommonModule,
    CartamaRoutingModule
  ]
})
export class CartamaModule { }
