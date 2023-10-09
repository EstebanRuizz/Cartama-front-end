import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatziRoutingModule } from './platzi-routing.module';
import { PlatziComponent } from './platzi.component';


@NgModule({
  declarations: [
    PlatziComponent
  ],
  imports: [
    CommonModule,
    PlatziRoutingModule
  ]
})
export class PlatziModule { }
