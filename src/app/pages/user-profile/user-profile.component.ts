import {ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ecole } from '../tables/tables.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  ecole:any;

  constructor( private router : ActivatedRoute) { 
    this.ecole={} as ecole;
  }

  ngOnInit() {
    this.ecole=this.router.paramMap.subscribe((data)=>{
      console.log(data.get('id'));
    })
  }

}
