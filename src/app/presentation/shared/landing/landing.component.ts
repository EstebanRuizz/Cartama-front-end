import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(private router: Router) {}

  renderSignupForm(): void {
    this.router.navigate(['auth', 'singn-up']);
  }

  renderSigninForm(): void {
    this.router.navigate(['auth', 'singn-in']);
  }
}
