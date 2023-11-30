import { Component } from '@angular/core';

import { User } from '@angular/fire/auth';

import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {

  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],

  })

  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {
    console.log(this.loginForm);
   }


}
