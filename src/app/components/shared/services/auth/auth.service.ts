import { Injectable } from '@angular/core';

// interfaces
import { User } from '../interfaces/user';

import { Router } from '@angular/router';

// firebase
// import auth from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any;

  constructor(public angularFireAuth: AngularFireAuth,
              public angularFirestore: AngularFirestore,
              public router: Router) {

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        // this.ngZone.run(() => {
          this.router.navigate(['']);
          console.log("n");

        // });
        this.SetUserData(result.user);
        // console.log(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email, password, role) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['']);
        console.log("m");
        // get users roles if exist push on it, if not create new array
        const roles = JSON.parse(localStorage.getItem('roles'))||[];
        const currentUser = {userId:result.user.uid,role};
        roles.push(currentUser);
        localStorage.setItem('roles', JSON.stringify(roles))
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        // this.SendVerificationMail();
        this.SetUserData(result.user);
        // console.log(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null ) ? true : false;
  }

  /* Setting up user data when sign in with username/password,
sign up with username/password and sign in with social auth
provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      // roles: {
      //   client: true
      // }
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  SignOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }

}
