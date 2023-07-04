import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginUser } from 'src/app/application/DTO/user/IListUserDTO';
import { AuthService } from 'src/app/application/Service/authService/auth.service';

@Component({
  selector: 'app-singn-in',
  templateUrl: './singn-in.component.html',
  styleUrls: ['./singn-in.component.css'],
})
export class SingnInComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  userSignIn: ILoginUser = {
    email: '',
    password: '',
  };

  onSubmit() {

    console.log(this.userSignIn);

    // this.authService.loginUser(this.userSignIn).subscribe({
    //   next: (response) => {},
    //   error: (error: Error) => {},
    // });
  }





  renderLanding(): void {
    this.router.navigate(['landing']);
  }
  renderResetPassword(): void {
    this.router.navigate(['auth', 'password-reset']);

  }












}
