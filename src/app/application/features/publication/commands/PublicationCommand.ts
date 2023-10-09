import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseCommandRepository } from 'src/app/persistence/repositories/BaseCommandRepository';
import { ICreatePublicationDTO } from 'src/app/application/interfaces/Publication/ICreatePublicationDTO';
import { ICommandRepository } from 'src/app/application/interfaces/ICommandRepository';
import { EndPoints } from 'src/environments/EndPoints';

interface CreatePublicationDTO {}
interface UpdatePublicationDTO {}
interface DeletePublicationDTO {}
interface ListPublicationDTO {}

@Injectable()
export class PublicationCommand extends BaseCommandRepository<
  CreatePublicationDTO,
  UpdatePublicationDTO,
  DeletePublicationDTO,
  ListPublicationDTO
> implements ICommandRepository<ICreatePublicationDTO, UpdatePublicationDTO, DeletePublicationDTO, ListPublicationDTO>  {
  constructor() {
    const API_URL = EndPoints.PUBLICATION
    super(API_URL);
  }

  override create(instance: ICreatePublicationDTO): Observable<ListPublicationDTO> {
    return super.create(instance);
  }

  override update(instance: UpdatePublicationDTO): Observable<ListPublicationDTO> {
    return super.update(instance);
  }

  override delete(id: number): Observable<DeletePublicationDTO> {
    return super.delete(id);
  }
}
