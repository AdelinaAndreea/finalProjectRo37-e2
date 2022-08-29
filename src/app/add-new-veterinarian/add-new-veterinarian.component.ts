import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarian } from '../model/veterinarian';
import { VeterinarianServiceService } from '../veterinarian-service.service';

@Component({
  selector: 'app-add-new-veterinarian',
  templateUrl: './add-new-veterinarian.component.html',
  styleUrls: ['./add-new-veterinarian.component.css']
})
export class AddNewVeterinarianComponent implements OnInit {
  id!: number;
  firstName!: string;
  public veterinarian!: Veterinarian;
  public isVisible: boolean = false;
  public myGroup!: FormGroup;
  
  constructor(private veterinarianService: VeterinarianServiceService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.veterinarian = this.router.getCurrentNavigation()?.extras.state?.['veterinarianJson'];
    console.log("Am primit veterinarul:" + this.veterinarian);
    const currentNavigation = this.router.getCurrentNavigation();
  }
  ngOnInit(): void {
    
    this.createForm();
  }

 
  private createForm() {

    this.myGroup = this.formBuilder.group(
      {
        formVeterinarianFirstName: new FormControl(),
        formVeterinarianLastName: new FormControl(),
        formVeterinarianSpeciality: new FormControl(),

      });

  }
  public createVeterinarian() {

    let veterinarian: Veterinarian = new Veterinarian();

    veterinarian.firstName = this.myGroup.get('formVeterinarianFirstName')?.value;
    veterinarian.lastName = this.myGroup.get('formVeterinarianLastName')?.value;
    veterinarian.speciality = this.myGroup.get('formVeterinarianSpeciality')?.value;

    this.veterinarianService.createVeterinarian(veterinarian).subscribe(veterinarianDto => {
      this.veterinarian.id = veterinarianDto.id;
      this.veterinarian.firstName = veterinarianDto.firstName;
      this.veterinarian.lastName = veterinarianDto.lastName;
      this.veterinarian.speciality = veterinarianDto.speciality;

    });

    this.router.navigateByUrl('veterinarian',);
  }


}
