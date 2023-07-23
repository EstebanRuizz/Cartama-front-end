import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserCommand } from './application/features/user/commands/User.commands';
import { UserQuery } from './application/features/user/queries/UserQueries';
import { AuthModule } from './presentation/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { PublicationCommand } from './application/features/publication/commands/PublicationCommand';
import { HttpService } from './application/ServiceExtension/HttpService';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
  ],
  providers: [UserCommand, UserQuery, PublicationCommand, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
