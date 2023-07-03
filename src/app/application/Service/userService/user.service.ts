import { UserRespository } from 'src/app/infrastructure/Repository/user/user.repository';
import { Observable, from } from 'rxjs';
import { User } from 'src/app/core/models/user/user.model';
import { Injectable } from '@angular/core';
import { ICreateUserDTO, IListUserDTO } from '../../DTO/user/IListUserDTO';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRespository) {}

  CreateUser(newUser: ICreateUserDTO): Observable<IListUserDTO> {
    const user = from(this.userRepository.create(newUser));
    console.log(user, 'ON SERVICE');
    return user;
  }
  ListUsers(): Observable<IListUserDTO[]> {
    return from(this.userRepository.getAll());
  }

}
