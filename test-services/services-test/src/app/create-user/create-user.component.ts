import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../types/User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  @Output() createUserEmit = new EventEmitter<{ username: string , age: number }>();
  users : User[] = []; 

  constructor( public userService: UserService ) {
    this.users = userService.users;
    
  }

  addUser(username: HTMLInputElement, age: HTMLInputElement) {
    this.userService.addUser(username, age);
    console.log(this.userService.users);
    
    username.value = '';
    age.value = '';
  }

  createUser(username: HTMLInputElement, age: HTMLInputElement) {

    const data = { 
      username: username.value,
      age: Number(age.value)
    }
    this.createUserEmit.emit(data);
  }
  
}
