import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IResetPassword } from 'src/app/application/DTO/user/IListUserDTO';
import { AuthService } from 'src/app/application/Service/authService/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  userResetPassword: IResetPassword = {
    email: ''
  }


  resetPassword(){console.log(this.userResetPassword)
  }

  renderSingnInComponent(): void {
    this.router.navigate(['auth', 'singn-in']);

  }

}
