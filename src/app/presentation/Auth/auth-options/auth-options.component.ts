import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-options',
  templateUrl: './auth-options.component.html',
  styleUrls: ['./auth-options.component.css'],
})
export class AuthOptionsComponent {
  constructor(private router: Router) {}

  renderSignupForm(): void {
    this.router.navigate(['auth', 'singn-up']);
  }

  renderSigninForm(): void {
    this.router.navigate(['auth', 'singn-in']);
  }
}
