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

  formData = {
    cedula: '',
    email: '',
    password: '',
  };

  onSubmit() {
    const newUser: ICreateUserDTO = {
      email: this.formData.email,
      password: this.formData.password,
    };

    this.userCommand.CreateUser(newUser).subscribe({
      next: (response) => {
        console.log(response);
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
