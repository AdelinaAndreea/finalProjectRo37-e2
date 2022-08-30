import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {VeterinarianServiceService} from "./veterinarian-service.service";
import {PetServiceService} from "./service/pet-service.service";
import { AddNewVeterinarianComponent } from './add-new-veterinarian/add-new-veterinarian.component';
import { AddNewPetComponent } from './add-new-pet/add-new-pet.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [VeterinarianServiceService, PetServiceService,AddNewVeterinarianComponent,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
