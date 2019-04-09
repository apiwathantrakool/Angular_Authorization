import { LoginService } from './../_Services/login.service';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from "@angular/router";
import { Observable } from 'rxjs-compat';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    isCanActivate = false;

    constructor(
        private authService: AuthService,
        private loginService: LoginService
    ) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.isCanActivate = false;
        
        return this.authService.isAuthenticated()
            .then((authenticated: boolean) => {

                if (authenticated) {
                    route.data['roles'].forEach(role => {
                        this.loginService.getCurrentUser().roles.forEach(userRole => {
                            if (userRole === role){
                                this.isCanActivate = true;
                            }
                        });
                    });

                    if (this.isCanActivate) {
                        return true;
                    }

                } else {
                    return false;
                }
            });
    }

}
