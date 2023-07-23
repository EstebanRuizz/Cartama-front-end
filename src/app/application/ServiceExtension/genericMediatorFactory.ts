// generic-mediator.factory.ts
import { GenericMediator } from 'src/app/application/Mediator/GenericMediator';
import { ICommandRepository } from 'src/app/application/interfaces/ICommandRepository';
import { IQueryRepository } from '../interfaces/IQueryRepository';

export function genericMediatorFactory<TCreate, TUpdate, TDelete, TList>
(
  commandRepository: ICommandRepository<TCreate, TUpdate, TDelete, TList>,
  queryRepository: IQueryRepository<TList>
)
: GenericMediator<TCreate, TUpdate, TDelete, TList>
{
  return new GenericMediator<TCreate, TUpdate, TDelete, TList>(
    commandRepository, queryRepository
  );
}
