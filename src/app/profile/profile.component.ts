import { Component, OnInit } from '@angular/core';
import { StorageComponent } from '../storage/storage.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  constructor(private storageService: StorageComponent) { }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
}

