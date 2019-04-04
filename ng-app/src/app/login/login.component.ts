import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { UserService } from '../Services/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser: User = null

  userInput = {
    username: '',
    password: ''
  }

  msg = '';

  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginService.getCurrentUser()
      .subscribe((currentUser: User) => {
        this.currentUser = currentUser
      });
  }

  login() {

    const user = this.userService.getUserByUsernamePassword(this.userInput.username, this.userInput.password);
    if (user) {
      this.loginService.setCurrentUser(user);
      this.loginService.getCurrentUser()
        .subscribe((currentUser: User) => {
          this.currentUser = currentUser
        });
      this.msg = '';
    } else {
      this.msg = 'Fail';
    }

  }

  logout() {
    this.loginService.setCurrentUser(null);
    this.loginService.getCurrentUser()
      .subscribe((currentUser: User) => {
        this.currentUser = currentUser
      });

    this.userInput.username = '';
    this.userInput.password = '';
  }

}
