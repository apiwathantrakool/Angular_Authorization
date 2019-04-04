import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = null;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getCurrentUser()
      .subscribe((currentUser: User)=>{
        this.user = currentUser
      });
  }

}
