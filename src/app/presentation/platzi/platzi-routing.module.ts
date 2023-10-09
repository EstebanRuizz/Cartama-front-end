import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatziComponent } from './platzi.component';

const routes: Routes = [{ path: '', component: PlatziComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatziRoutingModule { }
