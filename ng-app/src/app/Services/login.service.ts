import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser: User = null;

  constructor() { }

  getCurrentUser() {
    const currentUserObserbable = new Observable(observer => {
      observer.next(this.currentUser);
    });
    return currentUserObserbable;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
