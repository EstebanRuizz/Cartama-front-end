import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { END_POINTS } from 'src/environments/environment.dev';
import { Pagination } from 'src/app/application/interfaces/IQueryRepository';
import { BaseQueryRepository } from 'src/app/persistence/repositories/BaseQueryRepository';

interface ListUserDTO {}

@Injectable()
export class UserQuery extends BaseQueryRepository<ListUserDTO> {
  constructor() {
    const API_URL = END_POINTS.USER_END_POINT;
    super(API_URL);
  }

  override getById(id: number): Observable<ListUserDTO> {
    return super.getById(id);
  }

  override getAllPaginated(pagination: Pagination): Observable<ListUserDTO[]> {
    return super.getAllPaginated(pagination);
  }
}
