import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: 'home', loadChildren: () => import('./presentation/home/home.module').then(m => m.HomeModule) },
  // { path: 'platzi', loadChildren: () => import('./presentation/platzi/platzi.module').then(m => m.PlatziModule) },
  { path: '**', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
