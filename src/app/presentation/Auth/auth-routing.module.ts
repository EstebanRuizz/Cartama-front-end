import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SingnInComponent } from './singn-in/singn-in.component';
import { SingnUpComponent } from './singn-up/singn-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'singn-up', component: SingnUpComponent },
      { path: 'singn-in', component: SingnInComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
