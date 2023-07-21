// generic-mediator.ts
import { ICommandRepository } from 'src/app/application/interfaces/ICommandRepository';
import { IMediator } from '../interfaces/Mediator/IMediator';
import { Observable } from 'rxjs';

export class GenericMediator<
  TCreate,
  TUpdate,
  TDelete,
  TList
> implements IMediator<TCreate, TUpdate, TDelete, TList> {
  constructor(private commandRepository: ICommandRepository<TCreate, TUpdate, TDelete, TList>) {}

  delete(instance: TDelete, component: any): void {
    // Implementation for delete method (if needed)
  }

  update(instance: TUpdate, component: any): void {
    // Implementation for update method (if needed)
  }

  create(instance: TCreate, component: any): void {
    this.commandRepository.create(instance).subscribe({
      next: (response) => {
        component.handleCreated(response);
      },
      error: (error) => {
        component.handleError(error);
      },
    });
  }

}
