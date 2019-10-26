import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

export interface ecole {
  admin: string,
  city: string,
  codePostal: string,
  email: string,
  location: string,
  name: string,
  telephone: string,
  type: string,
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  ecoles: ecole[];
  ecole1: ecole[];
  rootRef = firebase.database().ref();
  villes = ["Douala", "Yaoundé", "Bertoua", "Buea", "Bafoussam", "Kongssamba"];
  usersKey = [];
  admins: any[];
  adminsA: any[];
  constructor(private router: Router) {
    this.ecole1 = [];
    this.ecoles = [];
    this.adminsA = [];
  }

  ngOnInit() {
    this.getAdmins();
    this.getEcoles();

  }

  getEcoles() {
    for (let i = 0; i < this.villes.length; i++) {
      this.rootRef.child('ecoles/' + this.villes[i]).once('value')
        .then((data) => {
          if (data.val() != null) {
            this.ecoles = data.val();
            this.ecoles.forEach((value) => {
              // console.log(value);
              this.ecole1.push(value);
            })
          }

        }).catch((err) => {
          console.log(err);
        });
    }
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

  goToSigleSchoolPage(ecole:ecole) {
    this.router.navigate(['user-profile', {ecole:ecole}]);
  }

  delateSchool(ecole) {

  }




}
