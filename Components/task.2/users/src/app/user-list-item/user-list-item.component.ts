import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../types/User';


@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {
@Input() user : User = { name: '', age: 0 };
@Output() onDelete = new EventEmitter<string>();
@Output() dataReceiver = new EventEmitter<User>();


  onDeleteEmit(){
    this.onDelete.emit(this.user.name)
  }

  dataSender() {
    const data = { name: this.user.name, age: Number(this.user.age) };

    this.dataReceiver.emit(data)
  }

  
}
