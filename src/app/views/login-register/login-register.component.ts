import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatTabsModule,LoginComponent,LoginRegisterComponent],
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
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
