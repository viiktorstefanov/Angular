import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.css'
})
export class AddThemeComponent {

  form = this.fb.group({
    themeName: ['', [Validators.required, Validators.minLength(5)]],
    postText: ['', [Validators.required, Validators.minLength(10)]]
  })

  constructor( private fb: FormBuilder ) {

  }

  submitThemeHandler() :void {
    if(this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    
  }
}
