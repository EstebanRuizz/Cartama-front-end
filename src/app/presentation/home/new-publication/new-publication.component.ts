// new-publication.component.ts
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ICreatePublicationDTO, IDeletePublicationDXTO, IListPublicationDXTO, IUpdatePublicationDTO } from 'src/app/application/interfaces/Publication/ICreatePublicationDTO';
import { PublicationCommand } from 'src/app/application/features/publication/commands/PublicationCommand';
import { GenericMediator } from 'src/app/application/Mediator/GenericMediator';

@Injectable()
@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css'],
  providers: [PublicationCommand], 
})
export class NewPublicationComponent implements OnInit {
  publicationForm!: FormGroup;
  publicationCreated: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private mediator: GenericMediator<ICreatePublicationDTO,IUpdatePublicationDTO,IDeletePublicationDXTO,IListPublicationDXTO>
  ) {}

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
      this.mediator.create(publication, this);
    }
  }

  handleCreated(response: any): void {
    console.log('Publication created:', response);
    this.publicationCreated = true;
  }

  handleError(error: any): void {
    console.error('Publication error:', error);
  }
}
