import { Injectable } from '@angular/core';
import { User } from '../core/user.model';
import { UserService } from '../core/user.service';
import { UserRepository } from '../infrastructure/user.repository';
import { Observable } from 'rxjs';

@Injectable()
export class UserApplicationService {
  constructor(
    private userService: UserService,
    private userRepository: UserRepository
  ) {}

  getUsers(): User[] {
    return this.userService.getUsers();
  }

  createUser(user: User): Observable<User> {
    return this.userRepository.createUser(user);
  }

  updateUser(user: User): Observable<User> {
    return this.userRepository.updateUser(user);
  }

  deleteUser(id: number): Observable<void> {
    return this.userRepository.deleteUser(id);
  }
}
