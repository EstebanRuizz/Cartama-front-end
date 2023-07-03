import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/application/Service/userService/user.service';
import { ICreateUserDTO } from 'src/app/application/DTO/user/IListUserDTO';

@Component({
  selector: 'app-singn-up',
  templateUrl: './singn-up.component.html',
  styleUrls: ['./singn-up.component.css'],
})
export class SingnUpComponent {
  constructor(private userService: UserService, private router: Router) {}

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

    this.userService.CreateUser(newUser).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  renderLanding(): void {
    this.router.navigate(['landing']);
  }

  /*
  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Acceder a los parámetros de la ruta
      const id = params['id'];
      const category = params['category'];

      // Hacer algo con los parámetros
      console.log('ID:', id);
      console.log('Category:', category);
    });
  }
}

  */
}
