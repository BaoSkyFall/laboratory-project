export class AuthModel {
  authToken?: string;
  refreshToken?: string;
  expiresIn?: Date;
  token?: string;
  user: any;

  setAuth(auth: AuthModel) {
    this.authToken = auth.authToken;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
    this.token = auth.token;
    this.user = auth.user;

  }
}
