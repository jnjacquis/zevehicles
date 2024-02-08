import { Component, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthenticationService } from "../../services/authentication.service";
import { LoginComponent } from "../../views/login/login.component";
import { RegisterComponent } from "../../views/register/register.component";
import { User } from "../../domain/user";
import { LoginRegisterComponent } from '../login-register/login-register.component';

@Component({
  selector: 'app-user-session',
  templateUrl: './user-session.component.html',
  styleUrls: ['./user-session.component.scss']
})
export class UserSessionComponent {

  user: User = {
    username: '',
    email: '',
    password: '',
    token: ''
  };
  authenticationService = inject(AuthenticationService);
  userLogged = this.authenticationService.userLogged;

  constructor(public dialog: MatDialog) { }

  openLoginRegisterDialog(): void {
    const dialogRef = this.dialog.open(LoginRegisterComponent, {
      //height: '400px',
      data: this.user,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = result;
    });
  }

  showUserProfile() {

  }

  loginLogoutEffect = effect(() => {
    console.log("User logged eff: ", this.userLogged());
    console.log("User: ", this.authenticationService.user);
  });

  login() {
    this.authenticationService.signIn("jnjacquis@yopmail.com", "jnjacquis");
  }

  logout() {
    this.authenticationService.signOut();
  }
}
