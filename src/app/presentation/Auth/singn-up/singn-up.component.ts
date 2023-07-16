import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserCommand } from 'src/app/application/features/user/commands/user.command';
import { ICreateUserDTO } from 'src/app/application/DTO/user/IListUserDTO';

@Component({
  selector: 'app-singn-up',
  templateUrl: './singn-up.component.html',
  styleUrls: ['./singn-up.component.css'],
})
export class SingnUpComponent {
  constructor(private userCommand: UserCommand, private router: Router) {}

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
    this.userCommand.CreateUser(this.user).subscribe({
      next: (response) => {
        console.log(response);
        if (response) {
         
        }
        this.renderHomeComponent();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  renderLanding(): void {
    this.router.navigate(['landing']);
  }
  renderSingIn(): void {
    this.router.navigate(['auth', 'singn-in']);
  }
  renderHomeComponent(): void {
    this.router.navigate(['home', 'publication']);
  }
}
