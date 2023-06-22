import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to My Angular App</h1>
    <app-user-list></app-user-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Component logic goes here
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'hr-frontend';
// }
