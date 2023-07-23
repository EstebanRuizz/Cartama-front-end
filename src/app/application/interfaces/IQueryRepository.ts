import { Observable } from 'rxjs';

export type Pagination = {
  limit: number;
  offset: number;
};

export interface IQueryRepository<ListInstanceDTO> {
  readonly baseUrl: string;

  getAll(): Observable<ListInstanceDTO[]>;
  getById(id: number): Observable<ListInstanceDTO>;
  getAllPaginated(pagination: Pagination): Observable<ListInstanceDTO[]>;
  
}
