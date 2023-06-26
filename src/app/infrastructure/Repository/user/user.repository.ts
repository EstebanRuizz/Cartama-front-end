import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRepository } from '../../../core/IRepositories/Iuser.repository';
import { User } from '../../../core/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserRespository implements IUserRepository {
  private readonly API_URL = `http://localhost:3000/user`;

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    throw new Error('Method not implemented.');
  }
  getPaginatedUsers(limit: number, offSet: number): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }
  createUser(user: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
  updateUser(user: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
