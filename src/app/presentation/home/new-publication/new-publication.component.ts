// new-publication.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPublicationMediator } from 'src/app/application/Mediator/New-publication-mediator';
import { ICreatePublicationDTO } from 'src/app/application/interfaces/Publication/ICreatePublicationDTO';


@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css'],
})
export class NewPublicationComponent implements OnInit {
  publicationForm!: FormGroup;
  publicationCreated: boolean = false; // Propiedad para almacenar el estado de si la publicación fue creada o no

  constructor(private formBuilder: FormBuilder, private mediator: NewPublicationMediator) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.publicationForm = this.formBuilder.group({
      title: ['', Validators.required],
      hasForm: [false, Validators.required],
      idTypeOfPublication: [1, Validators.required],
      description: ['', Validators.required],
      imageRoute: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.publicationForm.valid) {
      const publication: ICreatePublicationDTO = this.publicationForm.value;
      this.mediator.createPublication(publication, this); // Solicitamos el mediador y pasamos el componente actual como parámetro
    }
  }

  handlePublicationCreated(response: any): void {
    console.log('Publication created:', response);
    this.publicationCreated = true; // Establecemos la bandera en true cuando la publicación es creada
  }

  handlePublicationError(error: any): void {
    console.error('Publication error:', error);
    // Aquí podrías mostrar un mensaje de error en la interfaz de usuario si lo deseas
  }
}
