import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.renderAuthOptions()
  }

  renderAuthOptions(): void {
    this.router.navigate(['auth', 'auth-options']);
  }

  renderSignupForm(): void {
    this.router.navigate(['auth', 'singn-up']);
  }

  renderSigninForm(): void {
    this.router.navigate(['auth', 'singn-in']);
  }

}
