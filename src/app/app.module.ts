import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { PetListComponent } from './pet-list/pet-list.component';
import { VeterinarianDetailsComponent } from './veterinarian-details/veterinarian-details.component';
import { VeterinarianListComponent } from './veterinarian-list/veterinarian-list.component';
//import { PetDetailsComponent } from './pet-details/pet-details.component';


const routes: Routes = [
{path:'pets',component:PetListComponent},
// {path:'pets/details', component:PetDetailsComponent},
// {path:'pets/details:id',component:PetDetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    VeterinarianDetailsComponent,
    VeterinarianListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
