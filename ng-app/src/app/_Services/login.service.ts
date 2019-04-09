import { Injectable } from '@angular/core';
import { User } from '../_Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser: User = null;

  constructor() { }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
