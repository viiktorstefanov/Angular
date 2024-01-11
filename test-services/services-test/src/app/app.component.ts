import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services-test';

  users: User[] = [];

  constructor( userService: UserService) {
    this.users = userService.users;

  }

  createUser(data: {}) {
    console.log('app');
    
  }

}
