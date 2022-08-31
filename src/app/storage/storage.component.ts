import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})

export class StorageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clean(): void {
    window.sessionStorage.clear();
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }
}






  
 