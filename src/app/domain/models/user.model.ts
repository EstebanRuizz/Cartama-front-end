export interface User {
  Id: number;
  nationalIdentificationNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  profilePictureRoute: string;
  idTypeDocument: number;
  idRol: number;
}
