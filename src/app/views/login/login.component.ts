import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthenticationService);

  loginForm = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  onSubmit(): void {
    const formValue = this.loginForm.value;
    if (formValue.email == undefined || formValue.password == undefined) {
      return;
    }
    const userEmail = this.loginForm.value.email as string;
    const userPassword = this.loginForm.value.password as string;
    this.authService.signIn(userEmail, userPassword);

    // Close this dialog
    this.dialogRef.close();
  }
}