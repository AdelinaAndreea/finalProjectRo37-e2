import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Pet } from '../model/pet';
import { PetServiceService } from '../service/pet-service.service';
import {AddNewPetComponent} from "../add-new-pet/add-new-pet.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit,OnChanges {
  pets !:Pet[];
  public isVisible:boolean=false;
  subsccription!:Subscription;
  subscription: any;
  constructor(private petService:PetServiceService, private router:Router) { }
  ngOnDestroy(): void {
   this.subscription.unsubscribe;
  }
  ngOnChanges(changes: SimpleChanges): void {
   this.petListUpdate();
   
  }


  ngOnInit(){
    this.petListUpdate();
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
  onAdd(){
    this.isVisible=false
  }
  public petListUpdate(){
    this.subscription = this.petService.findAll().subscribe(data=>{
      this.pets=data;
    });
   }
}

