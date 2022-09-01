import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {VeterinarianServiceService} from "./veterinarian-service.service";
import {PetServiceService} from "./service/pet-service.service";
import { AddNewVeterinarianComponent } from './add-new-veterinarian/add-new-veterinarian.component';


import { AuthService } from './services_autentificare/auth.service';
import { StorageService } from './services_autentificare/storage.service';
import { UserService } from './services_autentificare/user.service';
@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [VeterinarianServiceService, PetServiceService,AuthService,StorageService,UserService]
})
export class AppModule { }
