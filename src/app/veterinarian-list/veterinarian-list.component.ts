import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinarian } from '../model/veterinarian';
import { VeterinarianServiceService } from '../veterinarian-service.service';
import { Form,NgForm} from '@angular/forms';
@Component({
  selector: 'app-veterinarian-list',
  templateUrl: './veterinarian-list.component.html',
  styleUrls: ['./veterinarian-list.component.css']
})
export class VeterinarianListComponent implements OnInit {
  veterinarian !: Veterinarian[];
  public isVisible:boolean=false;
  constructor(private veterinarianService:VeterinarianServiceService, private router:Router) { }
  ngOnInit() {
    this.veterinarianService.findAll().subscribe( data=>{
      this.veterinarian=data;
    });
  }
 deleteVeterinarian(id:any){
  this.veterinarianService.deleteVeterinarianById(id).subscribe(data =>{
    this.ngOnInit();
    console.log("Veterinarian with id"+id+"has been removed");
  })
  }


onAdd(){
   this.isVisible=true
  }

viewDetails(veterinarian: Veterinarian){
  this.router.navigateByUrl('/veterinarian/details',{state:{veterinarianJson:veterinarian}})
}
}


