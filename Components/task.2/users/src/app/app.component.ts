import { Component } from '@angular/core';
import { User } from './types/User';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'users';
  appUsers: User[] = [];

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

  addUser(firstName : HTMLInputElement, age: HTMLInputElement) {
    this.userService.submitHandler(firstName, age);
    this.appUsers = this.userService.users;
  }

}
