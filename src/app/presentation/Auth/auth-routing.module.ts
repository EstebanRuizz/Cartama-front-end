import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { SingnInComponent } from './singn-in/singn-in.component';
import { SingnUpComponent } from './singn-up/singn-up.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      { path: 'singn-up', component: SingnUpComponent },
      { path: 'singn-in', component: SingnInComponent },
      { path: 'password-reset', component: PasswordResetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
