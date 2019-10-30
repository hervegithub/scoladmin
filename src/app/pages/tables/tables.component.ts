import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {SchoolServiceService} from '../../share/school-service/school-service.service';

export interface ecole {
  id?: number;
  description: string;
  admin: string;
  city: string;
  codePostal: string;
  email: string;
  location: string;
  name: string;
  telephone: string;
  type: string;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  ecoles: any = [];
  admins: any = [];
  constructor(private router: Router, private serviceSchool: SchoolServiceService) {
      this.serviceSchool.getEcoles().then((data) => {
        this.ecoles = data;
      }).catch((err) => {
        console.log(err);
      });

      this.serviceSchool.etAdmins().then((data) => {
        this.admins = data;
      }).catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {}

  goToSigleSchoolPage(id: any) {
    const i = id + 1;
    this.router.navigate(['user-profile', {i}]);
  }

  delateSchool(eco: any) {
  }
}
