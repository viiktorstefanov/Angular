import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../types/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users : User[] = []; 

  constructor( public userService: UserService, private cdr: ChangeDetectorRef  ) {
    
  }

  ngOnInit(): void {
     this.userService.getUsers().subscribe((data) => {
      console.log(data)
     });
     this.users = this.userService.users;
     this.cdr.detectChanges();
  }
}
