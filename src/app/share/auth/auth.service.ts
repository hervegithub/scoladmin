import * as firebase from 'firebase';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  isAuth: boolean = false;
  email: string = '';
  password: string = '';
  constructor() {}

  signIn(email: string, password: string) {
    const promise = new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(data => {
        resolve(data);
        this.isAuth = true;
      }).catch(err => {
        reject(err);
      });
    });
    return promise;
  }

  logOut() {
    const promise = new Promise((resolve, reject ) => {
      firebase.auth().signOut().then(() => {
        resolve('Vous êtes deconnecter');
      }).catch(err => {
        reject(err);
      });
    });
    return promise;
  }
}
