import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../domain/user";
import { LoginRegisterComponent } from '../login-register/login-register.component';

@Component({
  selector: 'app-user-session',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatDialogModule,MatIconModule,MatListModule,MatSidenavModule],
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
