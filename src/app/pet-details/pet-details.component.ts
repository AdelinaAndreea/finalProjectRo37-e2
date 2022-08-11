import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetServiceService } from '../service/pet-service.service';
import { Pet }  from '../model/pet';

@Component({
    selector: 'app-pet-details',
    templateUrl: './pet-details.component.html',
    styleUrls: ['./pet-details.component.css']
})

export class PetDetailsComponent implements OnInit{
    id!: number;
    pet!: Pet;

    constructor(private petService:PetServiceService, private route: ActivatedRoute ){ }



ngOnInit(): void {
    this.readPetById();
  }

  readPetById(){
    this.id=this.route.snapshot.params["petId"];
    
    }
}


