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
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log(this.formData);
  }
}
