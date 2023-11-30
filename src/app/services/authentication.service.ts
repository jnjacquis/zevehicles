import { Injectable, inject, signal } from '@angular/core';
import { Observable, Subscription, of } from "rxjs";
import {
  Auth, User, user, authState, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  user: User | undefined;
  userLogged = signal<boolean>(false);

  constructor() { }

  signIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        this.user = userCredential.user;
        this.userLogged.set(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('User authentication with ' + email + ': ' + errorCode + ' ' + errorMessage);
        this.user = undefined;
        this.userLogged.set(false);
      });
  }

  signOut() {
    signOut(this.auth);
    this.user = undefined;
    this.userLogged.set(false);
  }

  register(username: string, email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        this.user = userCredential.user;
        this.userLogged.set(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('User authentication with ' + email + ': ' + errorCode + ' ' + errorMessage);
        this.user = undefined;
        this.userLogged.set(false);
      });
  }
}

