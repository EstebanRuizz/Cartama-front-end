import { Observable } from 'rxjs';
import { HttpClient, HttpHandler, HttpXhrBackend } from '@angular/common/http';
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
  private static httpInstance: HttpClient;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    if (!BaseCommandRepository.httpInstance) {
      const httpHandler = new HttpXhrBackend({
        build: () => new XMLHttpRequest(),
      });
      BaseCommandRepository.httpInstance = new HttpClient(httpHandler);
    }
  }

  create(instance: CreateInstanceDTO): Observable<ListInstanceDTO> {
    return BaseCommandRepository.httpInstance.post<ListInstanceDTO>(
      this.baseUrl,
      instance
    );
  }

  update(instance: UpdateInstanceDTO): Observable<ListInstanceDTO> {
    return BaseCommandRepository.httpInstance.put<ListInstanceDTO>(
      `${this.baseUrl}`,
      instance
    );
  }

  delete(id: number): Observable<DeleteInstanceDTO> {
    return BaseCommandRepository.httpInstance.delete<DeleteInstanceDTO>(
      `${this.baseUrl}/${id}`
    );
  }
}
