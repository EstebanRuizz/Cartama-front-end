import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './presentation/user-list/user-list.component';

import { UserService } from './core/user.service';
import { UserRepository } from './infrastructure/user.repository';
import { UserApplicationService } from './application/user.application.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    UserRepository,
    UserApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
