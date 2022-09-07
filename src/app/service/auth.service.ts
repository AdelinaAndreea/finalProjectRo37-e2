import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from '@angular/compiler';
const AUTH_API = 'http://localhost:8880/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public checkIsLoggedIn$: Observable<boolean>;
  private _checkIsLoggedIn = new BehaviorSubject<any>(null);
  private token?:Token;

  constructor(private http: HttpClient) {
    this.checkIsLoggedIn$ = this._checkIsLoggedIn.asObservable();
  }

  public setCheckIsLoggedIn(value: boolean) {
    this._checkIsLoggedIn.next(value);
  }
  
  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
   
    );
  }
  
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { });
  }

  public setToken(token:Token){
    this.token=token;
  }
  
}