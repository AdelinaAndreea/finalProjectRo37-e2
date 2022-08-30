import { Component, OnChanges, OnDestroy, OnInit,SimpleChanges,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinarian } from '../model/veterinarian';
import { VeterinarianServiceService } from '../veterinarian-service.service';
import { Form,NgForm} from '@angular/forms';
import { AddNewVeterinarianComponent } from '../add-new-veterinarian/add-new-veterinarian.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-veterinarian-list',
  templateUrl: './veterinarian-list.component.html',
  styleUrls: ['./veterinarian-list.component.css']
})
export class VeterinarianListComponent implements OnInit, OnChanges, OnDestroy{
  veterinarian !: Veterinarian[];
  public isVisible:boolean=false;
  subscription!: Subscription;
  constructor(private veterinarianService:VeterinarianServiceService, private router:Router) { }
  ngOnDestroy(): void {
   this.subscription.unsubscribe;
  }
  ngOnChanges(changes: SimpleChanges): void {
   this.veterianListUpdate();
   
  }
  ngOnInit() {
    this.veterianListUpdate();
  }
 deleteVeterinarian(id:any){
  this.veterinarianService.deleteVeterinarianById(id).subscribe(data =>{
    this.ngOnInit();
    console.log("Veterinarian with id"+id+"has been removed");
  })
  }

viewDetails(veterinarian: Veterinarian){
  this.router.navigateByUrl('/veterinarian/details',{state:{veterinarianJson:veterinarian}})
}
  createVeterinarian(){
   this.veterinarianService.findAll().subscribe(data =>{
    this.veterinarian=data;
   });
 }


 onAdd(){
  this.isVisible=false
 }
 public veterianListUpdate(){
  this.subscription = this.veterinarianService.findAll().subscribe(data=>{
    this.veterinarian=data;
  });
 }

}


