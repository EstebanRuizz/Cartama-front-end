import { UserRespository } from 'src/app/persistence/repositories/user.repository';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICreateUserDTO, IListUserDTO } from '../../../DTO/user/IListUserDTO';

@Injectable()
export class UserQuery {
  constructor(private userRepository: UserRespository) {}
  
  ListUsers(): Observable<IListUserDTO[]> {
    return from(this.userRepository.getAll());
  }

}
