import { Component, OnInit } from '@angular/core';
import { Vet } from '../model/veterinarian';
import { VeterinarianServiceService } from '../veterinarian-service.service';

@Component({
  selector: 'app-veterinarian-list',
  templateUrl: './veterinarian-list.component.html',
  styleUrls: ['./veterinarian-list.component.css']
})
export class VeterinarianListComponent implements OnInit {

  veterinarian!:Vet[];


  constructor(private veterinarianService:VeterinarianServiceService) { }

  ngOnInit(): void {
    this.veterinarianService.findAll().subscribe(data=>{
      this.veterinarian=data;
    });
  }

}
