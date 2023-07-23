import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpXhrBackend } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Pagination, IQueryRepository } from 'src/app/application/interfaces/IQueryRepository';

export abstract class BaseQueryRepository<ListInstanceDTO>
  implements IQueryRepository<ListInstanceDTO>
{
  readonly baseUrl: string;
  private static http: HttpClient;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    if (!BaseQueryRepository.http) {
      const httpHandler = new HttpXhrBackend({
        build: () => new XMLHttpRequest(),
      });
      BaseQueryRepository.http = new HttpClient(httpHandler);
    }
  }
  
  protected handleError(error: any): Observable<never> {
    console.error('Error fetching data:', error);
    return throwError(() => new Error('Failed to fetch data. Please try again later.'));
  }
  
  getAll(): Observable<ListInstanceDTO[]> {
    return BaseQueryRepository.http.get<ListInstanceDTO[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  getAllPaginated(pagination: Pagination): Observable<ListInstanceDTO[]> {
    let params = new HttpParams();
    params = params.append('limit', pagination.limit.toString());
    params = params.append('offset', pagination.offset.toString());
    console.log(this.baseUrl);
    
    return BaseQueryRepository.http.get<ListInstanceDTO[]>(this.baseUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<ListInstanceDTO> {
    return BaseQueryRepository.http.get<ListInstanceDTO>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  
}
