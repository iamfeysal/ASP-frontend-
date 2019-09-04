import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {LoginService} from '../../services/auth/login.service';

interface TokenObj {
  key: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;
  errorMessage: [any, any];
  hide = true;
  constructor(private loginService: LoginService, public router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.login = {
      email: '',
      password: ''
    };
    const mrToken = this.cookieService.get('mr-token');
    console.log(mrToken);
    if (mrToken) {
      this.router.navigate(['home']);
    }
  }

  onLogin() {
    this.loginService.onLogin(this.login).subscribe(
      ( response: TokenObj) => {
        console.log(response);
        this.router.navigateByUrl('home');
        alert('User' + this.login.email + 'has logged ');
        this.cookieService.set('mr-token', response.key);
      },
      (err) => {
        // tslint:disable-next-line:no-unused-expression
        this.errorMessage = [err.error.email, err.error.non_field_errors];
        console.log(err);
        setTimeout(() => this.errorMessage = '', 2000);
      });
  }

}
