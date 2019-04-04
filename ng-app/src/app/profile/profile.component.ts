import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User = null;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.currentUser= this.loginService.getCurrentUser();
  }

}
