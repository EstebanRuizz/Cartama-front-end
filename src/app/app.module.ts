import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListComponent } from './presentation/user/user-list/user-list.component';
import { UserRespository } from './infrastructure/Repository/user/user.repository';
import { UserService } from './application/Service/userService/user.service';
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
  providers: [UserRespository, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
