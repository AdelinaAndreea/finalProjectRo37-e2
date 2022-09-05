import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
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
ownerId:any;
public isAddButtonVisible:boolean=false;




  constructor(private petService : PetServiceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(){
  this.ownerId=this.route.snapshot.paramMap.get('ownerId');
  console.log(this.ownerId);
  if(this.ownerId==null) {
    this.isAddButtonVisible=false;
    this.petService.findAll().subscribe( data=> {
      this.pets = data;
   });
  }else{
    this.isAddButtonVisible=true;
    this.petService.findPetById(this.ownerId).subscribe( data=> {
      this.pets = data;
    
   });
  }
  
  }

  deletePet(id:any){
    console.log("deletePetById");
    this.petService.deletePetById(id).subscribe(data =>{
      this.ngOnInit();
      console.log("Pet with id "+id+" has been removed");
    })
  }
  
  addPet(pet:Pet){
    this.petService.addPet(pet).subscribe(data =>{
      this.ngOnInit();
      console.log("Pet with id "+pet.id+" has been added");
    })
  }
  showPetForm(){
    //TODO
  }


// onAdd(){
//   this.isVisible=true;
// }

  viewDetails(pet: Pet) {
    console.log("viewDetails");
    this.router.navigateByUrl('/pets/details', {state: {petJson:pet}});
  }
 
  
}
