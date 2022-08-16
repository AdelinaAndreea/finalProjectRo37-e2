import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vet } from '../model/veterinarian';
import { VeterinarianServiceService } from '../veterinarian-service.service';

@Component({
  selector: 'app-veterinarian-details',
  templateUrl: './veterinarian-details.component.html',
  styleUrls: ['./veterinarian-details.component.css']
})
export class VeterinarianDetailsComponent implements OnInit {
id!: number;
veterinarian!:Vet;

  constructor(private veterinarianService:VeterinarianServiceService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
   this.readVeterinarianById();
  }
  readVeterinarianById() {
    throw new Error('Method not implemented.');
  }
  reatVeterinarianByName(){
    // this.name=this.route.snapshot.params["veterinarianName"];
}
}
