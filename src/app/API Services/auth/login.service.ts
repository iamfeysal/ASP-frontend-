import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',

  });

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  onLogin(userData): Observable<any> {
    const body = JSON.stringify(userData);
    // console.log(userData);
    return this.http.post('https://amateur-sport-plartform.herokuapp.com/authentication/login',   body,
      {headers: this.getAuthHeaders()});
  }
  getAuthHeaders() {
    const Token = this.cookieService.get('token');
    console.log(Token);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'Token ${mrToken}'
    });
  }
}
