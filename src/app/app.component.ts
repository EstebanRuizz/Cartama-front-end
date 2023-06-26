import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hr-frontend';

  constructor(private router: Router) { }

  ngOnInit() {}

  renderSignupForm() {
    console.log("pick");

    this.router.navigate(['/user-form']);
  }


  renderSigninForm() {
    this.router.navigate(['/app-signin']);
  }
}
