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
  register;
  errorMessage = '';
  constructor(private userService: SignupService, public router: Router) { }

  ngOnInit() {
    this.register = {
      email: '',
      password: ''
    };
  }
  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        alert('User' + this.register.email + 'has been created');
        this.router.navigateByUrl('login');
      },
      (err) => {
        this.errorMessage = (err.error.email);
        setTimeout(() => this.errorMessage = '', 2000);
      });
  }

}
