import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
    formData = {
    cedula: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log(this.formData);
  }
}
