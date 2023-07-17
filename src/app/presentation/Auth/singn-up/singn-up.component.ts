import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserCommand } from 'src/app/application/features/user/commands/User.commands';
import { ICreateUserDTO } from 'src/app/application/DTO/user/IListUserDTO';

@Component({
  selector: 'app-singn-up',
  templateUrl: './singn-up.component.html',
  styleUrls: ['./singn-up.component.css'],
})
export class SingnUpComponent {
  @ViewChild('formulario', { static: true })
  formulario!: NgForm;

  constructor(private userCommand: UserCommand, private router: Router) {}

  errorFlag: boolean = false;
  cedulaErrorFlag: boolean = false;
  messageError: string = '';
  cedulaMessageError: string = '';


  user: ICreateUserDTO = {
    nationalIdentificationNumber: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    profilePictureRoute: '',
    idTypeDocument: 1,
    idRol: 1
  };

  onSubmit() {
    if (!this.isEmailValid(this.user.email)) {
      this.errorFlag = true;
      this.messageError = 'El correo no es válido.';
      return;
    }

    this.userCommand.create(this.user).subscribe({
      next: (response) => {
        console.log(response);

        this.renderHomeComponent();
      },
      error: (error) => {
        console.error(error);
        this.errorFlag = true;
        this.messageError = 'Email en uso';
      },
    });
  }

  renderLanding(): void {
    this.router.navigate(['landing']);
  }

  renderHomeComponent(): void {
    this.router.navigate(['home', 'publication']);
  }

  isEmailValid(email: string): boolean {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    return emailRegex.test(email);
  }

  checkEmailValidity() {
    this.errorFlag = false; // Reiniciar el errorFlag

    if (this.formulario.controls['email'].dirty) {
      if (!this.isEmailValid(this.user.email)) {
        this.errorFlag = true;
        this.messageError = 'El correo no es válido.';
      } else {
        this.messageError = 'Email en uso';
      }
    }
  }

  isCedulaValid(cedula: string): boolean {
    const cedulaRegex = /^[0-9]+$/;
    return cedulaRegex.test(cedula);
  }

  checkCedulaValidity() {
    this.cedulaErrorFlag = false; // Reiniciar el cedulaErrorFlag

    if (this.formulario.controls['cedula'].dirty) {
      if (!this.isCedulaValid(this.user.nationalIdentificationNumber)) {
        this.cedulaErrorFlag = true;
        this.cedulaMessageError = 'Usa solo números.';
      }
    }
  }


}
