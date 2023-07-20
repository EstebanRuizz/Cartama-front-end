// new-publication-mediator.ts
import { Injectable } from '@angular/core';
import { PublicationCommand } from 'src/app/application/features/publication/commands/PublicationCommand';
import { ICreatePublicationDTO } from 'src/app/application/interfaces/Publication/ICreatePublicationDTO';
import { PublicationMediator } from 'src/app/application/interfaces/Mediator/PublicationMediator';
import { NewPublicationComponent } from 'src/app/presentation/home/new-publication/new-publication.component';

@Injectable()
export class NewPublicationMediator implements PublicationMediator {
  constructor(private publicationCommand: PublicationCommand) {}

  createPublication(
    publication: ICreatePublicationDTO,
    component: NewPublicationComponent
  ): void {
    this.publicationCommand.create(publication).subscribe({
      next: (response) => {
        component.handlePublicationCreated(response);
      },
      error: (error) => {
        component.handlePublicationError(error);
      },
    });
  }
}
