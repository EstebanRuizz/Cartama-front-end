import { Observable } from 'rxjs';

export interface ICommandRepository<
  CreateInstanceDTO,
  UpdateInstanceDTO,
  DeleteInstanceDTO,
  ListInstanceDTO
> {
  readonly baseUrl: string;

  create(instance: CreateInstanceDTO): Observable<ListInstanceDTO>;
  update(instance: UpdateInstanceDTO): Observable<ListInstanceDTO>;
  delete(id: number): Observable<DeleteInstanceDTO>;
}
