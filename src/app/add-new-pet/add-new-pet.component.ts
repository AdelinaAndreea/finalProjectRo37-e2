import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../model/pet';
import { PetListComponent } from '../pet-list/pet-list.component';
import { PetServiceService } from '../service/pet-service.service';
@Component({
  selector: 'app-add-new-pet',
  templateUrl: './add-new-pet.component.html',
  styleUrls: ['./add-new-pet.component.css']
})
export class AddNewPetComponent implements OnInit {
  id!: number;
  public pet!: Pet;
  public isVisible: boolean = false;
  public myGroup!: FormGroup;

  constructor(private petService: PetServiceService,private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,private petListComponent:PetListComponent) {
     const currentNavigation=this.router.getCurrentNavigation();
    
  }
  ngOnInit(): void {
     
      this.createForm();
  }
  private createForm() {

    this.myGroup = this.formBuilder.group(
      {
        formOwnerName: new FormControl(this.pet.owner),
        formPetName: new FormControl(this.pet.name),
        formRace: new FormControl(this.pet.race),
        formDateOfBirth: new FormControl(this.pet.dateOfBirth),
        formKilos: new FormControl(this.pet.kilos),
        formVaccinated: new FormControl(this.pet.isVaccinated),
    });

  }
  public createPet() {

    let pet: Pet = new Pet();
    
    pet.owner = this.myGroup.get('formPetOwnerName')?.value;
    pet.name = this.myGroup.get('formPetName')?.value;
    pet.race = this.myGroup.get('formPetName')?.value;
    pet.dateOfBirth = this.myGroup.get('formDateOfBirth')?.value;
    pet.kilos = this.myGroup.get('formKilos')?.value;
    pet.isVaccinated = this.myGroup.get('formVaccinated')?.value;

    this.petService.createPet(pet).subscribe(petDto => {

    });
 this.petListComponent.petListUpdate();
      
    this.router.navigateByUrl('pet');

    }
}

// function subscribe(arg0: (petDto: any) => void) {
//   throw new Error('Function not implemented.');
// }
//     // this.petService.createPet(pet).subscribe(petDto => {
//     //   this.pet.id = petDto.id;
//     //   this.pet.name = petDto.name;
//     //   this.pet.race = petDto.race;
//     //   this.pet.dateOfBirth = petDto.dateOfBirth;
//     //   this.pet.kilos = petDto.kilos;
//     //   this.pet.isVaccinated = petDto.isVaccinated;
//     //   this.pet.owner=petDto.isOwner;

//     // });

 