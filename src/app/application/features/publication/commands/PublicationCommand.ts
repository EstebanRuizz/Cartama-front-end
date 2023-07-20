import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseCommandRepository } from 'src/app/persistence/repositories/BaseCommandRepository';
import { END_POINTS } from 'src/environments/environment.dev';
import { ICreatePublicationDTO } from 'src/app/application/interfaces/Publication/ICreatePublicationDTO';

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
> {
  constructor() {
    const API_URL = END_POINTS.PUBLICATION_END_POINT;
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
