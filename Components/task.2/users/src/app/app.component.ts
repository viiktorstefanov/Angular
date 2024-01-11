import { Component, OnInit } from '@angular/core';
import { User } from './types/User';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'users';
  appUsers: User[] = [];

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.appUsers = users;
    })
  }

  addUser(firstName : HTMLInputElement, age: HTMLInputElement) {
    this.userService.submitHandler(firstName, age);
    this.appUsers = this.userService.users;
  }

}
