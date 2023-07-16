import { User } from 'src/app/domain/models/user.model';

export interface IResetPassword extends Pick<User, 'email'> {}
export interface ILoginUser extends Pick<User, 'email' | 'password'> {}

export interface ICreateUserDTO
  extends Pick<
    User,
    | 'nationalIdentificationNumber'
    | 'email'
    | 'firstName'
    | 'lastName'
    | 'phone'
    | 'password'
    | 'profilePictureRoute'
    | 'idTypeDocument'
    | 'idRol'
  > {}

export interface IListUserDTO extends Pick<User, 'Id' | 'email' | 'password'> {}
