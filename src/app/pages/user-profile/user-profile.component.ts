import {ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ecole } from '../tables/tables.component';
import {SchoolServiceService} from '../../share/school-service/school-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  id: any;
  formDisable: boolean = true;
  editeText: string ='Editer';

  ecole: ecole ;

  constructor( private router: ActivatedRoute, private ecoleService: SchoolServiceService) {
    this.ecole = { admin: "", city: "", codePostal: "", description: "", email: "", id: this.router.snapshot.params['i'], location: "", name: "", telephone: "", type: ""}
    this.id = this.router.snapshot.params['i'];
    this.ecoleService.getEcoleById(+this.id).then((data: ecole) => {
      this.id = +this.router.snapshot.params['i'];
      this.ecole.name = data.name;
      this.ecole.city = data.city;
      this.ecole.codePostal = data.codePostal;
      this.ecole.email = data.email;
      this.ecole.location = data.location;
      this.ecole.admin = data.admin;
      this.ecole.telephone = data.telephone;
      this.ecole.type = data.type;
      this.ecole.description = data.description;
    });
    console.log(this.ecole);
  }

  ngOnInit() {

  }

  editeprofil() {
    if ( this.editeText === 'Editer') {
      this.editeText = 'Enregistrer';
      this.formDisable = !this.formDisable;
    } else {
      this.ecoleService.modifierEcole(this.ecole).then(() => {
        console.log('Mise à jour effectuée !');
      }).catch(err => {
        console.log(err);
      });
      this.editeText = 'Editer';
      this.formDisable = true;
    }
  }

}
