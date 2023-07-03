import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';
import { ICreateUserDTO } from 'src/app/application/DTO/user/IListUserDTO';
import { IRepository } from '../IBaseRepository/IRepository';


export interface IUserRepository extends IRepository<User, ICreateUserDTO> {}
