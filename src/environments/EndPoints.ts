export class EndPoints {
  static readonly PROD = ``;
  static readonly DEVELOP = `https://localhost:7298/api/v1`;

  static readonly BASE_URL = EndPoints.DEVELOP;

  static readonly USER = `${EndPoints.BASE_URL}/User`;
  static readonly PUBLICATION = `${EndPoints.BASE_URL}/Publications`;
  static readonly AUTHENTICATE = `${EndPoints.BASE_URL}/Account/authenticate`
}