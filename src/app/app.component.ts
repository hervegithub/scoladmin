import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './share/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';
  constructor( private router: Router, private auth : AuthService) {
    if (this.auth.isAuth === true) {
      this.router.navigate(['dashboard']);
    } else {
      router.navigate(['login']);
    }
  }
}
