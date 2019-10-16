import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {LoginService} from '../../../API Services/auth/login.service';

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
  errorMessage: any[];
  hide = true;
  constructor(private loginService: LoginService, public router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.login = {
      email: '',
      password: ''
    };
    const Token = this.cookieService.get('token');
    console.log(Token);
    if (Token) {
      this.router.navigate(['home']);
    }
  }

  onLogin() {
    this.loginService.onLogin(this.login).subscribe(
      ( response: TokenObj) => {
        console.log(response);
        this.router.navigateByUrl('home');
        alert('User' + this.login.email + 'has logged ');
        this.cookieService.set('token', response.key);
      },
      (err) => {
        this.errorMessage = [err.error.email, err.error.non_field_errors, err.error.detail];
        setTimeout(() => this.errorMessage = '', 2000);
      });
      // (err) => {
      //   this.errorMessage = (err.error.email, err.error.non_field_errors, err.error.detail);
      //   console.log(err);
      //   setTimeout(() => this.errorMessage = '', 2000);
      // });
  }

}
