import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../types/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {
  @Input() user: User =  { name: '', age: 0 }
  

  constructor( public userService: UserService ) {
    
  }

  onDelete(name: string) {
    this.userService.deleteUser(name);
  }
  
}
