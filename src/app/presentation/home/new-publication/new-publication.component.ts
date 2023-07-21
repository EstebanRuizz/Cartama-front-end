import { Component, Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreatePublicationDTO, IDeletePublicationDXTO, IListPublicationDXTO, IUpdatePublicationDTO } from 'src/app/application/interfaces/Publication/ICreatePublicationDTO';
import { PublicationCommand } from 'src/app/application/features/publication/commands/PublicationCommand';
import { GenericMediator } from 'src/app/application/Mediator/GenericMediator';
import { BaseInstanceComponent } from 'src/app/application/Generic/BaseinstanceComponent';

@Injectable()
@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css'],
  providers: [PublicationCommand],
})
export class NewPublicationComponent extends BaseInstanceComponent<
  ICreatePublicationDTO,
  IUpdatePublicationDTO,
  IDeletePublicationDXTO,
  IListPublicationDXTO,
  ICreatePublicationDTO
> {
  publicationCreated: boolean = false;

  // Change property name to 'instanceForm'
  constructor(
    formBuilder: FormBuilder,
    mediator: GenericMediator<ICreatePublicationDTO, IUpdatePublicationDTO, IDeletePublicationDXTO, IListPublicationDXTO>
  ) {
    // Ensure to call the 'super' constructor with 'instanceForm'
    super(formBuilder, mediator);
  }

  override createFormControls(): Record<string, AbstractControl> {
    return {
      title: this.formBuilder.control('', Validators.required),
      hasForm: this.formBuilder.control(false, Validators.required),
      idTypeOfPublication: this.formBuilder.control(1, Validators.required),
      description: this.formBuilder.control('', Validators.required),
      imageRoute: this.formBuilder.control('', Validators.required),
    };
  }

  override handleCreated(response: IListPublicationDXTO): void {
    console.log('Publication created:', response);
    this.publicationCreated = true;
  }

  override handleError(error: any): void {
    console.error('Publication error:', error);
  }
}
