import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SingnInComponent } from './singn-in/singn-in.component';
import { SingnUpComponent } from './singn-up/singn-up.component';
import { FormsModule } from '@angular/forms';
import { RetreiveAccountComponent } from './retreive-account/retreive-account.component';

@NgModule({
  declarations: [AuthComponent, SingnInComponent, SingnUpComponent, RetreiveAccountComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
