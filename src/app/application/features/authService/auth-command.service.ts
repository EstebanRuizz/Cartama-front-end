import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from 'src/environments/EndPoints';
import { ICreateTokenDTO } from '../../DTO/auth/ICreateTokenDTO';
import { IListTokenDTO } from '../../DTO/auth/IListTokenDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthCommandService {
  constructor(private httpClient: HttpClient) {}

  authenticate(request: ICreateTokenDTO): Observable<IListTokenDTO> {
    return this.httpClient.post<IListTokenDTO>(EndPoints.AUTHENTICATE, request);
  }
}
