import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '@constants/api.constants';
import { CONFIG } from '@constants/config.constants';
import jwtDecode, * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export interface Credentials {
  // Customize received credentials here
  token: string;
}
const credentialsKey = 'authenticationInfo';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  constructor(public http: HttpClient) {
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    const credentials = localStorage.getItem(credentialsKey) || null;
    return credentials ? true : false;
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials() {
    return localStorage.getItem(credentialsKey) || null;
  }

  // /**
  //  * Sets the user credentials.
  //  * The credentials may be persisted across sessions by setting the `remember` parameter to true.
  //  * Otherwise, the credentials are only persisted for the current session.
  //  * @param credentials The user credentials.
  //  * @param remember True to remember credentials across sessions.
  //  */
  // setCredentials(credentials?: Credentials, remember?: boolean) {
  //   this._credentials = credentials || null;
  //   if (credentials) {
  //     const storage = remember ? localStorage : sessionStorage;
  //     storage.setItem(credentialsKey, JSON.stringify(credentials));
  //   } else {
  //     sessionStorage.removeItem(credentialsKey);
  //     localStorage.removeItem(credentialsKey);
  //   }
  // }

  /**
 * Logs out the user and clear credentials.
 * @return True if the user was logged out successfully.
 */
  logout(): Observable<any> {
    const logOutObs = new Observable(observer => {
      localStorage.clear();
      observer.next();
    });
    return logOutObs;
  }

  setToken(strToken: string): void {
    localStorage.setItem('authenticationToken', strToken);
  }

  setRefreshToken(strToken: string): void {
    localStorage.setItem('refreshToken', strToken);
  }

  getToken(): string {
    return localStorage.getItem('authenticationToken') || '';
  }

  storedUserInfo(info: any): void {
    // this.store.dispatch(new UpdateAccount(info));
    localStorage.setItem("authenticationInfo", JSON.stringify(info));
  }

  getTokenExpirationDate(token: string): number | null {
    const decoded: any = jwtDecode(token) || null;
    if (decoded?.exp === undefined) return null;
    return decoded?.exp;
  }

  refreshToken() {
    const strRToken = localStorage.getItem("refreshToken");
    // const data = strRToken;
    const dataModel = {
      refreshToken: strRToken
    }
    return this.http.post(API.URL.AUTHENTICATE.REFRESH_TOKEN, dataModel).pipe(tap((authResponse: any) => {
      const _data = authResponse.data;
      localStorage.setItem("authenticationToken", _data.accessToken);
      localStorage.setItem("refreshToken", _data.refreshToken);
    }));
  }

  isAccessTokenExpired(): boolean {
    let userToken: string = this.getToken() || '';
    if (userToken) {
      // Handler refreshToken
      const tokenExpiration = this.getTokenExpirationDate(userToken);
      let timeStamp = Math.floor(Date.now() / 1000);
      let result = (tokenExpiration || 0) - timeStamp;
      let minutes = (Math.floor(result / 60));

      return minutes <= CONFIG.TimeRefreshToken ? true : false;
    }
    return false;
  }
}
