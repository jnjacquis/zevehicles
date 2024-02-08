import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthenticationService);

  form = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(public dialogRef: MatDialogRef<RegisterComponent>) { }

  onSubmit(): void {
    const formValue = this.form.value;
    if (formValue.username == undefined || formValue.email == undefined || formValue.password == undefined) {
      return;
    }

    const username = this.form.value.username as string;
    const userEmail = this.form.value.email as string;
    const userPassword = this.form.value.password as string;
    this.authService.register(username, userEmail, userPassword);

    // Close this dialog
    this.dialogRef.close();
  }
}
