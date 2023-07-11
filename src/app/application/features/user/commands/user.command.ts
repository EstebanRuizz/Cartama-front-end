import { UserRespository } from 'src/app/persistence/repositories/user.repository';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICreateUserDTO, IListUserDTO } from '../../../DTO/user/IListUserDTO';

@Injectable()
export class UserCommand {
  constructor(private userRepository: UserRespository) {}

  CreateUser(newUser: ICreateUserDTO): Observable<IListUserDTO> {
    const user = from(this.userRepository.create(newUser));
    console.log(user, 'ON SERVICE');
    return user;
  }

}
