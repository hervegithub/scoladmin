import { Injectable } from '@angular/core';
import {ecole} from '../../pages/tables/tables.component';
import * as firebase from 'firebase';
import {rejects} from 'assert';




@Injectable({
  providedIn: 'root'
})
export class SchoolServiceService {

  rootRef = firebase.database().ref();
  isAuth = true;
  ecoles: ecole[];
  ecole1: ecole[];
  usersKey = [];
  villes = ['Douala', 'Yaoundé', 'Bertoua', 'Buea', 'Bafoussam', 'Kongssamba'];

  constructor() {
    this.ecole1 = [];
    this.ecoles = [];
  }


  getEcoles() {
    const promise = new Promise((resolve , reject ) => {
        this.rootRef.child('ecoles/').once('value')
          .then((data) => {
            if (data.val() != null) {
              this.ecoles = data.val();
              this.ecoles.forEach((value) => {
                // console.log(value);
                this.ecole1.push(value);
              });
            }
            resolve(this.ecole1);

          }).catch((err) => {
            reject(err);
        });
    });
    return promise;
  }

  etAdmins() {
    const promise = new Promise((resolve, reject) => {
      firebase.database().ref().child('admins').once('value')
        .then((data) => {
          data.forEach((value) => {
            this.usersKey.push(value.val());
          });
          resolve(this.usersKey);
        }).catch((err) => {
        reject(err);
      });
    });
    return promise;
  }

  setSchoolOnFirebase(_name: string, _email: string, _telephone: string, _admin: string,
                      _location: string, _city: string, _type: string, _codePostal: string) {


    const promise = new Promise((resolve, reject ) => {
      firebase.database().ref().child('ecoles').once('value').then((data) => {
        firebase.database().ref().child('ecoles/' + (data.numChildren() + 1)).set({
          id: (data.numChildren() + 1),
          description : 'Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.',
          name: _name,
          email: _email,
          telephone: _telephone,
          admin: _admin,
          location: _location,
          city: _city,
          type: _type,
          codePostal: _codePostal,
        }).then(() => {
          resolve('Opération réussie');
        }).catch((err) => {
          reject(err);
        });
      }).catch((err) => {
        reject(err);
      });
    });
    return promise;
  }

  getNomberOfEcole() {
    const promise = new Promise((resolve , reject) => {
      firebase.database().ref().child('ecoles').once('value').then((data) => {
         resolve(data.numChildren());
      }).catch((err) => {
        reject(err);
      });
    });
    return promise;
  }

  getEcoleById(index: number) {
    const promise = new Promise((resolve, reject) => {
      for (const eco of this.ecole1) {
        if (eco.id === index) {
          resolve(eco);
        }
      }
    });
    return promise;
  }

  modifierEcole( eco: ecole) {
    console.log(eco.id);
    const promise = new Promise((resolve, reject) => {
      firebase.database().ref().child('ecoles/' + eco.id).set(
        {
          id: eco.id,
          description : eco.description,
          name: eco.name,
          email: eco.email,
          telephone: eco.telephone,
          admin: eco.admin,
          location: eco.location,
          city: eco.city,
          type: eco.type,
          codePostal: eco.codePostal,
        }).then(() => {
          console.log('Mise à jour effectuée');
      }).catch((err) => {
        reject(err);
      });
    });
    return promise;
  }
}
