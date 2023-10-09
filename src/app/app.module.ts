import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthModule } from './presentation/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { HttpMediator } from './application/mediator/HttpMediator';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    IonicModule.forRoot(),
  ],
  providers: [ HttpMediator, ],
  bootstrap: [ AppComponent],
})
export class AppModule { }
