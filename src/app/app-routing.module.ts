import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './presentation/user-form/user-form.component';
import { UserListComponent } from './presentation/user-list/user-list.component';

const routes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-list', component: UserListComponent },
  // { path: '', redirectTo: 'user-list', pathMatch: 'full' }, // Redireccionar a la lista de usuarios por defecto
  // Otras rutas si es necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
