import { ICommandRepository } from 'src/app/application/interfaces/ICommandRepository';
import { IMediator } from '../interfaces/Mediator/IMediator';
import { IQueryRepository, Pagination } from '../interfaces/IQueryRepository';

export class GenericMediator<TCreate, TUpdate, TDelete, TList>
  implements IMediator<TCreate, TUpdate, TDelete, TList>
{
  constructor(
    private commandRepository: ICommandRepository<
      TCreate,
      TUpdate,
      TDelete,
      TList
    >,
    private queryRepository: IQueryRepository<TList>
  ) {}

  delete(instance: TDelete, component: any): void {
    this.commandRepository.delete(instance).subscribe({
      next: (response) => {
        component.handleCreated(response);
      },
      error: (error) => {
        component.handleError(error);
      },
    });
  }

  update(instance: TUpdate, component: any): void {
    this.commandRepository.update(instance).subscribe({
      next: (response) => {
        component.handleCreated(response);
      },
      error: (error) => {
        component.handleError(error);
      },
    });
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

  getAllPaginated(pagination: Pagination, component: any): void {
    this.queryRepository.getAllPaginated(pagination).subscribe({
      next: (response) => {
        component.handleGetAll(response);
      },
      error: (error) => {
        component.handleError(error);
      },
    });
  }

  getById(id: number, component: any): void {
    this.queryRepository.getById(id).subscribe({
      next: (response) => {
        component.handleGetById(response);
      },
      error: (error) => {
        component.handleError(error);
      },
    });
  }
 
  getAll(component: any): void {
    this.queryRepository.getAll().subscribe({
      next: (response) => {
        component.handleCreated(response)
      },
      error: (error) => {
        component.handleError(error)  
      }
    })
  }
}
