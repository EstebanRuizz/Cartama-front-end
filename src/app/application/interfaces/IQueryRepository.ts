import { Observable } from 'rxjs';

export type Pagination = {
  limit: number;
  offset: number;
};

export interface IQueryRepository<ListInstanceDTO> {
  readonly baseUrl: string;

  getAllPaginated(pagination: Pagination): Observable<ListInstanceDTO[]>;
  getById(id: number): Observable<ListInstanceDTO>;
}
