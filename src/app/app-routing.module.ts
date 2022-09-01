import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home-login', component: HomeLoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // { path: 'profile', component: ProfileComponent },
    // { path: 'user', component: BoardUserComponent },
    // { path: 'mod', component: BoardModeratorComponent },
    { path: 'admin', component: BoardAdminComponent },
    { path: '', redirectTo: 'home-login', pathMatch: 'full' }
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }