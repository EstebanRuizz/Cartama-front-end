import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListComponent } from './presentation/user-list/user-list.component';
import { UserService } from './core/user.service';
import { UserRepository } from './infrastructure/user.repository';
import { UserApplicationService } from './application/user.application.service';
import { UserFormComponent } from './presentation/user-form/user-form.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserFormComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [UserService, UserRepository, UserApplicationService],
  bootstrap: [AppComponent],
})
export class AppModule {}


