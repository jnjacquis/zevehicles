import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthenticationService);

  form = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  onSubmit(): void {
    const formValue = this.form.value;
    if (formValue.email == undefined || formValue.password == undefined) {
      return;
    }
    const userEmail = this.form.value.email as string;
    const userPassword = this.form.value.password as string;
    this.authService.signIn(userEmail, userPassword);

    // Close this dialog
    this.dialogRef.close();
  }
}