import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseCommandRepository } from 'src/app/persistence/repositories/BaseCommandRepository';
import { END_POINTS } from 'src/environments/environment.dev';

interface CreateUserDTO {}
interface UpdateUserDTO {}
interface DeleteUserDTO {}
interface ListUserDTO {}

@Injectable()
export class UserCommand extends BaseCommandRepository<
  CreateUserDTO,
  UpdateUserDTO,
  DeleteUserDTO,
  ListUserDTO
> {
  constructor() {
    const API_URL = END_POINTS.USER_END_POINT;
    super(API_URL);
  }

  override create(instance: CreateUserDTO): Observable<ListUserDTO> {
    return super.create(instance);
  }

  override update(instance: UpdateUserDTO): Observable<ListUserDTO> {
    return super.update(instance);
  }

  override delete(id: number): Observable<DeleteUserDTO> {
    return super.delete(id);
  }
}
