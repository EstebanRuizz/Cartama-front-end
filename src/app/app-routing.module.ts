import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './presentation/shared/landing/landing.component';
import { AuthComponent } from './presentation/auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'auth',
    loadChildren: () => import('./presentation/auth/auth.module').then(m => m.AuthModule),
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./presentation/home/home.module').then(m => m.HomeModule),
  // },
  {
    path: 'education',
    loadChildren: () => import('./presentation/education/education.module').then(m => m.EducationModule),
  },
  // {
  //   path: 'reservation',
  //   loadChildren: () => import('./presentation/reservation/reservation.module').then(m => m.ReservationModule),
  // },
  {
    path: 'contact',
    loadChildren: () => import('./presentation/contact/contact.module').then(m => m.ContactModule),
  },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./presentation/user/user.module').then(m => m.UserModule),
  // },
  {
    path: 'cartama',
    loadChildren: () => import('./presentation/cartama/cartama.module').then(m => m.CartamaModule),
  },
  // { path: 'platzi', loadChildren: () => import('./presentation/platzi/platzi.module').then(m => m.PlatziModule) },
  { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
