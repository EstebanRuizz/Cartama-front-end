import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { ICommandRepository } from 'src/app/application/interfaces/ICommandRepository';

export abstract class BaseCommandRepository<
  CreateInstanceDTO,
  UpdateInstanceDTO,
  DeleteInstanceDTO,
  ListInstanceDTO
> implements ICommandRepository<
  CreateInstanceDTO,
  UpdateInstanceDTO,
  DeleteInstanceDTO,
  ListInstanceDTO
> {
  readonly baseUrl: string;
  private static http: HttpClient;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    if (!BaseCommandRepository.http) {
      const httpHandler = new HttpXhrBackend({
        build: () => new XMLHttpRequest(),
      });
      BaseCommandRepository.http = new HttpClient(httpHandler);
    }
  }

  protected handleError(error: any): Observable<never> {
    console.error('Error executing request:', error);
    return throwError(() => new Error('Failed to execute request. Please try again later.'));
  }

  create(instance: CreateInstanceDTO): Observable<ListInstanceDTO> {
    return BaseCommandRepository.http.post<ListInstanceDTO>(this.baseUrl, instance).pipe(
      catchError(this.handleError)
    );
  }

  update(instance: UpdateInstanceDTO): Observable<ListInstanceDTO> {
    return BaseCommandRepository.http.put<ListInstanceDTO>(`${this.baseUrl}`, instance).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: DeleteInstanceDTO): Observable<ListInstanceDTO> {
    return BaseCommandRepository.http.delete<ListInstanceDTO>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
}
