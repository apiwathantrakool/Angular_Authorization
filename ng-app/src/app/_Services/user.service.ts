import { Injectable } from '@angular/core';
import { User } from '../_Models/user';
import { Role } from '../_Constants/Role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [
    {
      id: 'U-001',
      username: 'user01',
      password: '123456',
      name: 'user01-name',
      roles: [Role.User]
    },
    {
      id: 'U-002',
      username: 'user02',
      password: '123456',
      name: 'user02-name',
      roles: [Role.Admin]
    },
    {
      id: 'U-003',
      username: 'user03',
      password: '123456',
      name: 'user03-name',
      roles: [Role.User, Role.Admin]
    },
  ];

  constructor() { }

  getUserList() {
    return this.userList;
  }

  getUserById(id: String) {
    return this.userList.find(obj=>obj.id===id);
  }

  getUserByUsernamePassword(username: String, password: String) {
    const user = this.userList.find(obj=>obj.username===username && obj.password===password);
    return user;
  }
}
