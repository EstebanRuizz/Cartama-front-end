import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationCommand } from 'src/app/application/features/publication/commands/PublicationCommand';
import { ICreatePublicationDTO } from 'src/app/application/interfaces/Publication/ICreatePublicationDTO';
import { Publication } from 'src/app/domain/models/publication.model';

@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css'],
})
export class NewPublicationComponent implements OnInit {
  publicationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private publicationCommand: PublicationCommand
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.publicationForm = this.formBuilder.group({
      title: ['', Validators.required],
      hasForm: [false, Validators.required],
      idTypeOfPublication: [1, Validators.required], // Set a default value for idTypeOfPublication
      description: ['', Validators.required],
      imageRoute: ['', Validators.required], // Make imageRoute field required
    });
  }

  onSubmit(): void {
    if (this.publicationForm.valid) {
      const publication: ICreatePublicationDTO = this.publicationForm.value;
      console.log(publication);

      this.publicationCommand.create(publication).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
}
