import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListComponent } from './presentation/user/user-list/user-list.component';
import { UserRespository } from './persistence/repositories/user.repository';
import { UserCommand } from './application/features/user/commands/user.command';
import { UserQuery } from './application/features/user/queries/UserQuery';
import { UserFormComponent } from './presentation/user/user-form/user-form.component';
import { AuthModule } from './presentation/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent, UserListComponent, UserFormComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
  ],
  providers: [UserRespository, UserCommand, UserQuery],
  bootstrap: [AppComponent],
})
export class AppModule {}
