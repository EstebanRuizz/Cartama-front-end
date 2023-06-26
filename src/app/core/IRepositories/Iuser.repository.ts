import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';

export interface IUserRepository {
  getUserById(id: number): Observable<User>;
  getPaginatedUsers(limit: number, offSet: number): Observable<User[]>;
  createUser(user: User): Observable<User>;
  updateUser(user: User): Observable<User>;
  deleteUser(id: number): Observable<void>;
}
