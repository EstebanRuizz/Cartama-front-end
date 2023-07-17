import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ICommandRepository } from 'src/app/application/interfaces/ICommandRepository';

export class BaseCommandRepository<
  CreateInstanceDTO,
  UpdateInstanceDTO,
  DeleteInstanceDTO,
  ListInstanceDTO
> implements
    ICommandRepository<
      CreateInstanceDTO,
      UpdateInstanceDTO,
      DeleteInstanceDTO,
      ListInstanceDTO
    >
{
  readonly baseUrl: string;

  constructor(baseUrl: string, protected http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  create(instance: CreateInstanceDTO): Observable<ListInstanceDTO> {
    return this.http.post<ListInstanceDTO>(`${this.baseUrl}`, instance);
  }

  update(instance: UpdateInstanceDTO): Observable<ListInstanceDTO> {
    return this.http.put<ListInstanceDTO>(`${this.baseUrl}`, instance);
  }

  delete(id: number): Observable<DeleteInstanceDTO> {
    return this.http.delete<DeleteInstanceDTO>(`${this.baseUrl}/${id}`);
  }
}
