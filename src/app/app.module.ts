import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormBuilder, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';


const routes: Routes = [
{path:'pets',component:PetListComponent},
{path:'pets/details',component:PetDetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {

}
