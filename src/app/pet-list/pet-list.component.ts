import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Pet } from '../model/pet';
import { PetServiceService } from '../service/pet-service.service';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

 pets !: Pet[];
 public isVisible:boolean=false;




  constructor(private petService : PetServiceService, private router: Router) { }

  ngOnInit(){
 
    
    this.petService.findAll().subscribe( data=> {
      this.pets = data;
    });
  }

  deletePet(id:any){
    console.log("deletePetById");
    this.petService.deletePetById(id).subscribe(data =>{
      this.ngOnInit();
      console.log("Pet with id "+id+" has been removed");
    })
  }
  // addPet(pet:Pet){
  //   this.petService.addPet(pet).subscribe(data =>{
  //     this.ngOnInit();
  //     console.log("Pet with id "+pet.id+" has been added");
  //   })
  // }

  addPet(){


  }
// onAdd(){
//   this.isVisible=true;
// }

  viewDetails(pet: Pet) {
    
    this.router.navigateByUrl('/pets/details', {state: {petJson:pet}});
  }
 
  
}
