import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private router: Router) {}

  renderSignupForm(): void {
    this.router.navigate(['auth', 'singn-up']);
  }

  renderSigninForm(): void {
    this.router.navigate(['auth', 'singn-in']);
  }

}
