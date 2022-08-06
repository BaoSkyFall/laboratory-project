import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '@constants/api.constants';
import { CredentialsService } from '@services/credentials.service';
// import { UpdateUserPassword, UploadAvatarUserReq } from '@shared/models/user-info.model';
import * as _ from 'lodash';
import { Subject, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public permissionMatrix = [];

  constructor(private http: HttpClient
  ) { }

  hasPermissionOn(resourceId: string, actionId: string) {
    //Retry get permissionAccess
    if (this.permissionMatrix.length == 0) {
      this.permissionMatrix = JSON.parse(localStorage?.getItem('permissionAccess') || '') || [];
    }
    let index = -1;
    if (actionId === "") {
      index = _.findIndex(this.permissionMatrix, (e: any) => {
        return ((e.functionName == resourceId) && (e.permission === actionId));
      });
    }
    else {
      index = _.findIndex(this.permissionMatrix, (e: any) => {
        return ((e.functionName == resourceId) && (e.permission.includes(actionId)));
      });
    }
    if (index < 0) {
      return false;
    }
    return true;
  }

  saveLanguage(key: string) {
    localStorage.setItem("languageType", key);
  }

  getLanguage() {
    return localStorage.getItem('languageType');;
  }

  updateUserProfile(userInfo: any) {
    // return this.http.put(API.URL.USER.UPDATE_ACCOUNT_INFO, userInfo).pipe(take(1));
  }



  private extractData(res: any) {
    let body = res;
    return body || {};
  }
  private handleError = (response: HttpErrorResponse | any) => {
    if (response.status == 401) {
      return;
    }
    return throwError(response.message || "Server error");
  };

}
