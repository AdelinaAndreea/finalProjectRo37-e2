import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetServiceService } from '../service/pet-service.service';
import { Pet }  from '../model/pet';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-pet-details',
    templateUrl: './pet-details.component.html',
    styleUrls: ['./pet-details.component.css']
})

export class PetDetailsComponent implements OnInit{
    id!: number;
   public pet!: Pet;
   public isVisible:boolean=false;
   public myGroup!:FormGroup;

    constructor(private petService:PetServiceService, private route: ActivatedRoute, private router: Router, private formBuilder:FormBuilder){
        //console.log(this.router.getCurrentNavigation()?.extras.state?.'petJson');
        // this.router.getCurrentNavigation()?.extras.state.petJson;
        this.pet=this.router.getCurrentNavigation()?.extras.state?.['petJson'];
    const currentNavigation = this.router.getCurrentNavigation();
     }



ngOnInit(): void {
    //this.readPetById();
    this.createForm();
    
  }

//   readPetById(){
//     this.id=this.route.snapshot.params["petId"];
    
//     }
    reatPetByName(){
        // this.name=this.route.snapshot.params["petName"];
    }
 
   
       onEdit(item:Pet){
        this.isVisible=true;
       }

       private createForm(){
        this.myGroup=this.formBuilder.group(
            {
                formPetName: new FormControl(this.pet.name),
                formRace: new FormControl(this.pet.race),
                formDateOfBirth: new FormControl(this.pet.dateOfBirth),
                formKilos: new FormControl(this.pet.kilos),
                formVaccinated: new FormControl(this.pet.isVaccinated),

            }
        )
       }

       updatePet(){
        this.isVisible=false;
        this.pet.name=this.myGroup.get('formPetName')?.value;
        this.pet.race=this.myGroup.get('formRace')?.value;
        this.pet.dateOfBirth=this.myGroup.get('formDateOfBirth')?.value;
        this.pet.kilos=this.myGroup.get('formKilos')?.value;
        this.pet.isVaccinated=this.myGroup.get('formVaccinated')?.value;
       }
}


