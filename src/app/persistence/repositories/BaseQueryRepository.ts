import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Pagination,
  IQueryRepository,
} from 'src/app/application/interfaces/IQueryRepository';

export class BaseQueryRepository<ListInstanceDTO>
  implements IQueryRepository<ListInstanceDTO>
{
  readonly baseUrl: string;

  constructor(baseUrl: string, protected http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  getAllPaginated(pagination: Pagination): Observable<ListInstanceDTO[]> {
    let params = new HttpParams();
    params = params.append('limit', pagination.limit.toString());
    params = params.append('offset', pagination.offset.toString());

    return this.http.get<ListInstanceDTO[]>(this.baseUrl, { params });
  }

  getById(id: number): Observable<ListInstanceDTO> {
    return this.http.get<ListInstanceDTO>(`${this.baseUrl}/${id}`);
  }
}
