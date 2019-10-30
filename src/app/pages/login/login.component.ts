import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from '../../share/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  LogIn() {
    this.auth.signIn(this.email, this.password).then((data) => {
      this.router.navigate(['dashboard']);
    }).catch(err => {
      console.log(err);
    });
  }

}
