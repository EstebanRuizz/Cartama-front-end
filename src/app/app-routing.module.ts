import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './presentation/shared/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./presentation/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'landing', component: LandingComponent },
  { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
