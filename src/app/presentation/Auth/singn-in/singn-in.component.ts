import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IListTokenDTO } from 'src/app/application/DTO/auth/IListTokenDTO';
import { ICreateTokenDTO } from 'src/app/application/DTO/auth/ICreateTokenDTO';
import { AuthCommandService } from 'src/app/application/features/authService/auth-command.service';
import {
  HttpMediator,
  HttpMediatorCallbacks,
  CommandParamsWithPayload,
} from 'src/app/application/mediator/HttpMediator';

@Component({
  selector: 'app-singn-in',
  templateUrl: './singn-in.component.html',
  styleUrls: ['./singn-in.component.css'],
})

export class SingnInComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpMediator: HttpMediator,
  ) {}

  errorMessage: string | null = null;
  signInForm!: FormGroup;
  
  private initForm(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  
  ngOnInit(): void {
    this.initForm();
  }
  
  onSubmit(): void {
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListTokenDTO> = {
      success: this.setToken.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<ICreateTokenDTO, IListTokenDTO> = {
      commandClass: AuthCommandService,
      method: AuthCommandService.prototype.authenticate,
      data: this.getAuthenticateDTO(),
      callbacks,
    };
    this.httpMediator.execWithPayload(params);
  }
  
  private setToken(tokenObject: IListTokenDTO): void {
    sessionStorage.setItem('jwtToken', tokenObject.data.jwToken);
  }
  
  private getAuthenticateDTO(): ICreateTokenDTO {
    return {
      email: this.signInForm.get('email')?.value || '',
      password: this.signInForm.get('password')?.value || '',
    };
  }

  private handleError(error: string): void {
    console.log(error);
  }

  renderLanding(): void {
    this.router.navigate(['landing']);
  }

  renderResetPassword(): void {
    this.router.navigate(['auth', 'password-reset']);
  }
}