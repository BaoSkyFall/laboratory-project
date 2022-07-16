import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CredentialsService } from '@services/credentials.service';
import { AuthService } from '@services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
        private credentialsService: CredentialsService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        //Check permission user has access 
        const _permissions = route.data['permissions'] || [];
        const _isAuthorize = route.data['authorize'] || false;
        return this.checkUserHasPermission(state.url, _permissions, _isAuthorize);
    }

    checkUserHasPermission(url: string, _permissions: any, authorize: boolean): boolean {
        const _isAuthenticated = this.credentialsService.isAuthenticated();
        if (_isAuthenticated) {
            //Check user has authorize
            if (authorize && (_permissions.length == 0)) {
                return true;
            } else if (_permissions && (this.authService.hasPermissionOn(_permissions[0], _permissions[1]))) {
                //Check user roles
                return true;
            }
            else {
                // this.router.navigateByUrl('/permission-denied');
                this.router.navigate(['/login']);
                return false;
            }
        } else {
            // this.stateStorageService.storeUrl(url);
            this.router.navigate(['/login']);
            return false;
        }
    }
}
