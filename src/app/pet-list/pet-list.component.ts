import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Pet } from '../model/pet';
import { PetServiceService } from '../service/pet-service.service';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

 pets !: Pet[];


  constructor(private petService : PetServiceService) { }

  ngOnInit(){
    this.petService.findAll().subscribe( data=> {
      this.pets = data;
    });
  }

}
