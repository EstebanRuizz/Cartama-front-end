import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Pagination } from 'src/app/application/interfaces/IQueryRepository';
import { BaseQueryRepository } from 'src/app/persistence/repositories/BaseQueryRepository';
import { EndPoints } from 'src/environments/EndPoints';

interface ListUserDTO {}

@Injectable()
export class UserQuery extends BaseQueryRepository<ListUserDTO> {
  constructor() {
    const API_URL = EndPoints.USER;
    super(API_URL);
  }

  override getById(id: number): Observable<ListUserDTO> {
    return super.getById(id);
  }

  override getAllPaginated(pagination: Pagination): Observable<ListUserDTO[]> {
    return super.getAllPaginated(pagination);
  }
}
