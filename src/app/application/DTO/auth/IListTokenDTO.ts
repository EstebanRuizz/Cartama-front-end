export interface IListTokenDTO {
  data: {
    id: string;
    userName: string;
    email: string;
    roles: string[];
    isVerified: boolean;
    jwToken: string;
  };
  message: string;
  succeed: boolean;
  errors: string;
  statusCode: number;
}
