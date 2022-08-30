import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title: string = 'HOME';
    ngOnInit() {}

  constructor( private route: ActivatedRoute, private router: Router) { }

//   updateTitle(value) {
//     console.log(`updateTitle: ${value}`);
//     this.title = value;
//   }
}
  


