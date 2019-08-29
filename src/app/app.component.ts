import {Component, OnDestroy, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showMenu = false;
  darkModeActive: boolean;

  userEmail = '';

  constructor( public router: Router) {
  }

  sub1;

  ngOnInit() {
  }

  ngOnDestroy() {}


}
