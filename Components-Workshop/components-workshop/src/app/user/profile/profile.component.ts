import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  showEditMode = false;

  user = {
    username: 'baceviki',
    email: 'viktor@abv.bg',
     tel: '359886003010',
  }

  // get user() {
  //   const { username, email, tel } = this.userService.user!;
  //   return {
  //     username,
  //     email,
  //     tel
  //   };
  // }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)] ],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    tel: [''],
  })
  
  constructor(private fb: FormBuilder, private userService: UserService ) {
    this.form.setValue(this.user);
  }


  toggleEditMode():void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfile(): void {
    if(this.form.invalid) {
      return;
    }

    const { username, email, tel } = this.form.value;

    this.userService.user = {
      username,
      email,
      tel,
    } as any;
    console.log(this.form.value);
    this.toggleEditMode();
    
  }

  
}
