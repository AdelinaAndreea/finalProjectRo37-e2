import { Component,Injectable,Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarian } from '../model/veterinarian';
import { VeterinarianServiceService } from '../veterinarian-service.service';
@Component({
  selector: 'app-veterinarian-details',
  templateUrl: './veterinarian-details.component.html',
  styleUrls: ['./veterinarian-details.component.css']
})
//@Injectable({providedIn:"root"})

export class VeterinarianDetailsComponent implements OnInit {
id!: number;
firstName!:string;
public veterinarian!:Veterinarian;
public isVisible:boolean=false;
public myGroup!:FormGroup;
constructor(private veterinarianService: VeterinarianServiceService, private route: ActivatedRoute,private router: Router, private formBuilder:FormBuilder ){
    this.veterinarian=this.router.getCurrentNavigation()?.extras.state?.['veterinarianJson'];
    console.log("Am primit veterinarul:" + this.veterinarian);
    const currentNavigation = this.router.getCurrentNavigation();
  }
  ngOnInit(): void {

  this.createForm();
  }
  
onEdit(item:Veterinarian){
  this.isVisible=true;
 }
private createForm(){
  this.myGroup=this.formBuilder.group(
      {   formVeterinarianId: new FormControl(this.veterinarian.id),
          formVeterinarianFirstName: new FormControl(this.veterinarian.firstName),
          formVeterinarianLastName: new FormControl(this.veterinarian.lastName),
          formVeterinarianSpeciality: new FormControl(this.veterinarian.speciality),

      })
 }
updateVeterinarian(){
  alert("Edit---s-au facut modificari");
  this.isVisible=false;
  let veterinarianTemp: Veterinarian=new Veterinarian();
  veterinarianTemp.id=this.myGroup.get('formVeterinarianId')?.value;
  veterinarianTemp.firstName=this.myGroup.get('formVeterinarianFirstName')?.value;
  veterinarianTemp.lastName=this.myGroup.get('formVeterinarianLastName')?.value;
  veterinarianTemp.speciality=this.myGroup.get('formVeterinarianSpeciality')?.value;
  this.veterinarianService.updateVeterinarianById(veterinarianTemp).subscribe(veterinarianDto =>{
    this.veterinarian.id=veterinarianDto.id;
    this.veterinarian.firstName=veterinarianDto.firstName;
    this.veterinarian.lastName=veterinarianDto.lastName;
    this.veterinarian.speciality=veterinarianDto.speciality;
});
}
createVeterinarian(){
  alert("Create---s-a adaugat un nou veterinar");

//   this.isVisible=false;
//   let veterinarianTemp: Veterinarian=new Veterinarian();
//   veterinarianTemp.firstName=this.myGroup.get('formVeterinarianFirstName')?.value;
//   veterinarianTemp.lastName=this.myGroup.get('formVeterinarianLastName')?.value;
//   veterinarianTemp.speciality=this.myGroup.get('formVeterinarianSpeciality')?.value;
//   this.veterinarianService.createVeterinarian(veterinarianTemp).subscribe(veterinarianDto =>{
//     this.veterinarian.firstName=veterinarianDto.firstName;
//     this.veterinarian.lastName=veterinarianDto.lastName;
//     this.veterinarian.speciality=veterinarianDto.speciality;
// });
}
}


