import { Injectable, Injector } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import {
  catchError,
  filter,
  take,
  switchMap,
  finalize,
  takeUntil,
} from 'rxjs/operators';
import { Meta } from "@angular/platform-browser";
import { CredentialsService } from '@services/credentials.service';
import { HttpCancelService } from '@services/http-cancel.service';
// import { NotificationService } from '../../shared/helpers/services/notification.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  constructor(
    private injector: Injector,
    private meta: Meta,
    public http: HttpClient,
    private router: Router,
    private httpCancelService: HttpCancelService,
    public credentialsService: CredentialsService,
    // private notificationService: NotificationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const authStorageData = localStorage?.getItem(this.authLocalStorageToken) || '';
    let account: any = {};
    if (authStorageData) {
      account = JSON.parse(authStorageData) || null;
    }
    const isLoggedIn = account?.token;
    const isApiUrl = request.url.startsWith(environment.API_URL);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${account.token}` }
      });
    }

    return next.handle(request);
  }

  private handleRenewToken(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      //Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
      this.refreshTokenSubject.next(null);
      return this.credentialsService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.data.accessToken);
          return next.handle(this.addToken(request));
        }),
        catchError((e) => {
          // If there is an exception calling 'refreshToken', bad news so logout.
          this.credentialsService.logout().subscribe((res) => {
            return this.router.navigate(['/login']);
          });
          return throwError(e);
        }),
        finalize(() => {
          this.isRefreshing = false;
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((jwt) => {
          return next.handle(this.addToken(request));
        })
      );
    }
  }

  private addToken(request: HttpRequest<any>) {
    let token: string = this.credentialsService.getToken() || '';
    if (token) {
      //Handle boundary in multipart/form-data POST
      if (request.body instanceof FormData) {
        //We are sending a file here
        return request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            undefined: 'multipart/form-data',
          },
        });
      } else {
        return request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json; charset=utf-8',
          },
        });
      }
    }
    //Return request without token
    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}
