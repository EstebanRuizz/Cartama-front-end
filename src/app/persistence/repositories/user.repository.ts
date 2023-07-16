import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import  {environment} from '../../../environments/environment.dev'
import { User } from '../../../app/domain/models/user.model';
import {
  ICreateUserDTO,
  IListUserDTO,
} from 'src/app/application/DTO/user/IListUserDTO';
import { IRepository } from 'src/app/application/interfaces/IBaseRepository/IRepository';

@Injectable({
  providedIn: 'root',
})
export class UserRespository implements IRepository<User, ICreateUserDTO> {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getById(id: number): Observable<User> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<User[]> {
    throw new Error('Method not implemented.');
  }
  create(createUserDTO: ICreateUserDTO): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/User`, createUserDTO);
  }
  update(entity: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
