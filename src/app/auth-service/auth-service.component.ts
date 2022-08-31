import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8880/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-auth-service',
  templateUrl: './auth-service.component.html',
  styleUrls: ['./auth-service.component.css']
})
export class AuthServiceComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');}
    constructor(private http: HttpClient) {}
    login(username: string, password: string): Observable<any> {
      return this.http.post(
        AUTH_API + 'signin',
        {
          username,
          password,
        },
        httpOptions
      );
    }
    register(username: string, email: string, password: string): Observable<any> {
      return this.http.post(
        AUTH_API + 'signup',
        {
          username,
          email,
          password,
        },
        httpOptions
      );
    }
    logout(): Observable<any> {
      return this.http.post(AUTH_API + 'signout', { }, httpOptions);
    }
  }


