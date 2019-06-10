import { LoginComponent } from './auth/login/login.component';
import { SignupCustomerComponent } from './auth/signup-customer/signup-customer.component';
import { HomeComponent } from './auth/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupOwnerComponent } from './auth/signup-owner/signup-owner.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'signupOwner',component:SignupOwnerComponent},
  {path:'signupCustomer',component:SignupCustomerComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
  {path:'manager',loadChildren:'./manager/manager.module#ManagerModule'},
  {path:'customer',loadChildren:'./customer/customer.module#CustomerModule'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
