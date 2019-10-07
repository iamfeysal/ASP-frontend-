import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/auth/signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {
  Roles: any = ['Player', 'Coach', 'Fan'];
  register;
  errorMessage = '';
  hide = true;

  constructor(private userService: SignupService, public router: Router) { }

  ngOnInit() {
    this.register = {
      email: '',
      password: '',
      roles: this.Roles
    };
  }
  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        this.router.navigateByUrl('login');
        alert('User' + this.register.email + 'has been created');
        this.register.reset();
      },
      (err) => {
        this.errorMessage = err;
        setTimeout(() => this.errorMessage = '', 2000);
      // (err) => {
      //   this.errorMessage = (err.error.email);
      //   setTimeout(() => this.errorMessage = '', 2000);
      });
  }}
