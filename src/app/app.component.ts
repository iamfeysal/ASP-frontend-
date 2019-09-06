import {Component, OnDestroy, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showMenu = false;
  darkModeActive: boolean;

  userEmail = '';

  constructor( public router: Router, private cookieService: CookieService) {
  }

  sub1;

  ngOnInit() {
  //   const Token = this.cookieService.get('mr-token');
  //   console.log(Token);
  //   if (!Token) {
  //     this.router.navigate(['']);
  //   } else {
  //     this.router.navigate(['home']);
  // }
  }

  ngOnDestroy() {}


}
