import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordsValidator } from '../../shared/validators';
import { log } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    extension: [''],
    tel: [''],
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: [''],
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    }),
  });

  constructor(private fb: FormBuilder) {}

  registerSubmitHandler() :void {
    console.log(this.form.value);
    
  }
}
