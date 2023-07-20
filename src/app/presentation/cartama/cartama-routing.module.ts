import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartamaComponent } from './cartama.component';

const routes: Routes = [{ path: '', component: CartamaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartamaRoutingModule { }
