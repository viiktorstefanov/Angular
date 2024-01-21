import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router ) {

  }

  loginHandler(form : NgForm): void {
    if(form.invalid) {
      return;
    }
    //edit when have auth
    // this.userService.login();
    // this.router.navigate(['home'])
  }

}
