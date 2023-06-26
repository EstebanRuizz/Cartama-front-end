import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './presentation/user/user-form/user-form.component';
import { UserListComponent } from './presentation/user/user-list/user-list.component';
import { SigninComponent } from './presentation/Auth/signin/signin.component';
import { SignupComponent } from './presentation/Auth/signup/signup.component';

const routes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'app-signin', component: SigninComponent },
  { path: 'app-signup', loadChildren: () => import('./presentation/Auth/auth.module').then(module => module.AuthModule) },
  // { path: 'app-signup', component: SignupComponent },
  // { path: '', redirectTo: 'user-list', pathMatch: 'full' }, // Redireccionar a la lista de usuarios por defecto
  // Otras rutas si es necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
