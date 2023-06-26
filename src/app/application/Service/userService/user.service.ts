import { UserRespository } from 'src/app/infrastructure/Repository/user/user.repository';
import { Observable, from } from 'rxjs';
import { User } from 'src/app/core/models/user/user.model';
import { Injectable } from '@angular/core';
import { IListUserDTO } from '../../DTO/user/IListUserDTO';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRespository) {}

  ListUsers(): Observable<IListUserDTO[]> {
    return from(this.userRepository.getPaginatedUsers(5, 2));
  }
}
