import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Pet } from '../model/pet';
import { PetServiceService } from '../service/pet-service.service';
import {AddNewPetComponent} from "../add-new-pet/add-new-pet.component";

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit,OnChanges {
 pets !: Pet[];
 public isVisible:boolean=false;
  constructor(private petService : PetServiceService, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.petService.findAll().subscribe( data=>{
      this.pets=data;
    });
  }

  ngOnInit(){
    this.petService.findAll().subscribe( data=> {
      this.pets = data;
    });
  }
  deletePet(id:any){
    this.petService.deletePetById(id).subscribe(data =>{
      this.ngOnInit();
      console.log("Pet with id "+id+" has been removed");
    })
  }

  viewDetails(pet: Pet) {
    this.router.navigateByUrl('/pets/details', {state: {petJson:pet}});
  }
  createPet(){
    this.petService.findAll().subscribe(data =>{
      this.pets=data;
    });
  }
}

