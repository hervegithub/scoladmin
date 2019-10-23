import { Component, OnInit } from '@angular/core';
declare const google: any;
import * as firebase from "firebase";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  villes = ["Douala", "Yaoundé", "Bertoua", "Buea", "Bafoussam", "Kongssamba"];
  name: string;
  email: string;
  telephone: string;
  admin: string;
  isPremium: true;
  location: string;
  city: string;
  codePostal: string;
  type: string;

  nombreEcole: number = 0;
  admins: any[];
  usersKey = [];

  constructor() {
    let i = 0;
    for (i = 0; i < this.villes.length; i++) {
      firebase.database().ref().child("ecoles/" + this.villes[i]).once("value").then((data) => {
        this.nombreEcole += data.numChildren();
        console.log(data.numChildren())
        //console.log(this.nombreEcole);
      });
    }
    this.admins = [];

  }

  ngOnInit() {
    this.getAdmins();
  }

  addSchool() {
    firebase.database().ref().child("ecoles/" + this.city).once('value').then((data) => {
      firebase.database().ref().child("ecoles/" + this.city + "/" + data.numChildren()).set({
        name: this.name,
        email: this.email,
        telephone: this.telephone,
        admin: this.admin,
        location: this.location,
        city: this.city,
        type: this.type,
        codePostal: this.codePostal,
      }).then(() => {
        console.log("Ecole ajoutée avec success !");
      }).catch((err) => {
        console.log("Une erreur c'est produite !" + err);
      });
    })
  }

  getAdmins() {
    firebase.database().ref().child("admins").once("value")
      .then((data) => {
        data.forEach((value) => {
          this.usersKey.push(value.val());
        })
      }).catch((err) => {
        //console.log(err);
      })
    console.log(this.usersKey);
  }



}
