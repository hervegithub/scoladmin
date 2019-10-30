import { Component, OnInit } from '@angular/core';
declare const google: any;
import * as firebase from "firebase";
import {SchoolServiceService} from '../../share/school-service/school-service.service';


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
  usersKey: any = [];

  constructor( private ecoleService:  SchoolServiceService) {
    this.admins = [];

  }

  ngOnInit() {
    this.ecoleService.getNomberOfEcole().then((data: number) => {
      this.nombreEcole = data;
    });
    this.getAdmins();
  }

  addSchool() {
    this.ecoleService.setSchoolOnFirebase(this.name, this.email, this.telephone, this.admin, this.location, this.city, this.type, this.codePostal)
      .then(() => {
        console.log('Ecole enregistrer avec succes');
      }).catch(err => {
        console.log(err);
    });
  }

  getAdmins() {
    this.ecoleService.etAdmins().then(data => {
      this.usersKey = data;
    }).catch(err => {
      console.log(err);
    });
  }



}
