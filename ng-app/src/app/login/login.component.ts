import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_Services/login.service';
import { UserService } from '../_Services/user.service';
import { User } from '../_Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser: User = null

  userInput = {
    username: 'user01',
    password: '123456'
  }

  msg = '';

  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
  }

  login() {
    const user = this.userService.getUserByUsernamePassword(this.userInput.username, this.userInput.password);
    if (user) {
      this.loginService.setCurrentUser(user);
      this.currentUser= this.loginService.getCurrentUser();
      this.msg = '';
    } else {
      this.msg = 'Fail';
    }

  }

  logout() {
    this.loginService.setCurrentUser(null);
    this.currentUser= this.loginService.getCurrentUser();
  }

}
