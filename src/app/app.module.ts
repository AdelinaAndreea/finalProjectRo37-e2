import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormBuilder, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { VeterinarianListComponent } from './veterinarian-list/veterinarian-list.component';
import { VeterinarianDetailsComponent } from './veterinarian-details/veterinarian-details.component';
import { AddNewVeterinarianComponent } from './add-new-veterinarian/add-new-veterinarian.component';
import { AddNewPetComponent } from './add-new-pet/add-new-pet.component'
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthServiceComponent } from './auth-service/auth-service.component';
import { RegisterComponent } from './register/register.component';
import { StorageComponent } from './storage/storage.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

// import { PetCreateComponent } from './pet-create/pet-create.component';
// import { ClientDetailsComponent } from './client-details/client-details.component';
// import { ClientListComponent } from './client-list/client-list.component';


const routes: Routes = [
{path:'pets',component:PetListComponent},
{path:'pets/details',component:PetDetailsComponent},
{path:'veterinarian',component:VeterinarianListComponent},
{path:'veterinarian/details',component:VeterinarianDetailsComponent},
{path:'add-new-veterinarian', component:AddNewVeterinarianComponent},
{path:'add-new-pet',component:AddNewPetComponent},
{path:'home',component:HomeComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetDetailsComponent,
    VeterinarianListComponent,
    VeterinarianDetailsComponent,
    AddNewVeterinarianComponent,
    AddNewPetComponent,
    HomeComponent,
    LoginComponent,
    AuthServiceComponent,
    RegisterComponent,
    StorageComponent,
    ProfileComponent,
    BoardAdminComponent,

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'}),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [FormBuilder, VeterinarianListComponent],

  bootstrap: [AppComponent]
})
export class AppModule {

}
