import { User } from 'src/app/core/models/user/user.model';

export interface IListUserDTO extends User {
  Id: number;
  email: string;
  password: string;
}

export interface ICreateUserDTO
  extends Pick<IListUserDTO, 'email' | 'password'> {}

export interface ILoginUser extends Pick<User, 'email' | 'password'> {}

export interface IResetPassword extends Pick<User, 'email'>{}
