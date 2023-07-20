import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationCommand } from 'src/app/application/features/publication/commands/PublicationCommand';
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
    publicationCommand: PublicationCommand
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.publicationForm = this.formBuilder.group({
      title: ['', Validators.required],
      hasForm: [false, Validators.required],
      idTypeOfPublication: [null, Validators.required],
      description: ['', Validators.required],
      imageRoute: [''],
    });
  }

  onSubmit(): void {
    if (this.publicationForm.valid) {
      const publication: Publication = this.publicationForm.value;
    }
  }
}
