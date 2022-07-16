import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    constructor(private notification: NzNotificationService, private translateService: TranslateService) {

    }

    showToastr(subTitle: string, type: string) {
        switch (type) {
            case 'success': {
                this.notification.blank(this.translateService.instant('success'), subTitle, {
                    nzClass: 'alert alert-success'
                })
                break;
            }
            case 'error': {
                this.notification.blank(this.translateService.instant('error'), subTitle, {
                    nzClass: 'alert alert-danger'
                })
                break;
            }
            case 'warning': {
                this.notification.blank(this.translateService.instant('warning'), subTitle, {
                    nzClass: 'alert alert-warning'
                })
                break;
            }
            default:
                break;
        }
    }
}