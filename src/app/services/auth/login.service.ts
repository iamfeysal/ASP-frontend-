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
    // Authorization: 'Token 93657868a4a6d43346eda70e9c182bd45d5f8b63'

  });

  constructor(private http: HttpClient) { }

  onLogin(userData): Observable<any> {
    const body = JSON.stringify(userData);
    // console.log(userData);
    return this.http.post('http://127.0.0.1:8000/authentication/login',   body,
      {headers: this.headers});
  }
}
