import { Injectable } from '@angular/core';
import { LoginService } from '../_Services/login.service';

@Injectable()
export class AuthService {

    constructor(private loginService: LoginService) { }

    loggedIn = false;

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                if (this.loginService.getCurrentUser()) {
                    this.login();
                } else {
                    this.logout();
                }
                resolve(this.loggedIn)
            }
        )
        return promise
    }
}