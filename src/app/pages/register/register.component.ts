import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  nom: string;
  prenom: string;
  naissance: string;
  cni: string;
  telephone:string;

  constructor() { }

  ngOnInit() {
  }

  addAdmin() {
    if (this.email != null && this.password != null) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(data => { this.saveUserInfos(data.user.uid); })
        .catch(err => { console.log(err); });
    }
  }

  saveUserInfos(uid: any) {
    if (this.nom != null && this.prenom != null && this.password != null && this.cni != null) {
      firebase.database().ref().child('admins/' + uid).set({
        id: uid,
        date:new Date(),
        nom: this.nom,
        prenom: this.prenom,
        naissance: this.naissance,
        cni: this.cni,
        telephone: this.telephone
      }).then((data) => {
        console.log("utilisateur ajouté!!");
      }).catch((err) => {
        console.log(err);
      })
    }

  }

}
