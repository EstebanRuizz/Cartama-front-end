import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SingnInComponent } from './singn-in/singn-in.component';
import { SingnUpComponent } from './singn-up/singn-up.component';

@NgModule({
  declarations: [AuthComponent, SingnInComponent, SingnUpComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
