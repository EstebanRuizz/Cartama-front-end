import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRepository } from '../../../core/IUserRepository/Iuser.repository';
import { User } from '../../../core/models/user/user.model';
import { ICreateUserDTO, IListUserDTO } from 'src/app/application/DTO/user/IListUserDTO';
import { IRepository } from 'src/app/core/IBaseRepository/IRepository';

@Injectable({
  providedIn: 'root',
})
export class UserRespository implements IRepository<User, ICreateUserDTO> {
  private readonly API_URL = `http://localhost:5086/User`;

  constructor(private http: HttpClient) {}
  getById(id: number): Observable<User> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<User[]> {
    throw new Error('Method not implemented.');
  }
  create(newUser: ICreateUserDTO): Observable<IListUserDTO> {
    console.log(newUser, ' ON REPOR');

    return this.http.post<any>(`${this.API_URL}/addUser`, newUser);
  }
  update(entity: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
