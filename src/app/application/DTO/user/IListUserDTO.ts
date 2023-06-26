import { User } from 'src/app/core/models/user/user.model';

export interface IListUserDTO extends User {
  Id: number;
  name: string;
  age: number;
  genre: string;
  email: string;
}
