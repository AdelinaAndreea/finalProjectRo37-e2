import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../auth_services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title: string = 'HOME';
   content?:string;
    

  constructor( private route: ActivatedRoute, private router: Router,private userService:UserService) { }
  ngOnInit(): void {
  this.userService.getPublicContent().subscribe({
    next: data => {
      this.content = data;
    },
    error: err => {console.log(err)
      if (err.error) {
        this.content = JSON.parse(err.error).message;
      } else {
        this.content = "Error with status: " + err.status;
      }
    }
  });
  }
}
  


