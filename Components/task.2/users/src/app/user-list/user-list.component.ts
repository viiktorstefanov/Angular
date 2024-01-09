import { Component, Input } from '@angular/core';
import { User } from '../types/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users: User[] = [];

  deleteHandler(firstName: string): void {   
   this.users =  this.users.filter(x => x.name !== firstName)
  }

  dataReceiver(data: User) : void {
    alert(data.name);
    alert(data.age);
  }
}
