import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';

import { TokenInterceptor } from "@interceptors/token.interceptor";
// import { HttpRequestInterceptor } from "@interceptors/spiner.interceptor";

import { AuthService } from '@services/auth.service';
import { HttpCancelService } from '@services/http-cancel.service';
// import { NotificationService } from '@services/notification.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpRequestInterceptor,
    //   multi: true,
    // },
    AuthGuard,
    AuthService,
    HttpCancelService
    // NotificationService
  ],
})
export class CoreModule { }
