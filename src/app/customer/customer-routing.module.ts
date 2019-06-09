import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from './customer/customer.component';

const customerRoutes: Routes = [
  {
    path: '',
    component:CustomerComponent,
    children: [
      //  { path: 'manageMeals', component: ManagerMealsComponent },
      //  { path: 'manageTables', component: ManagerTablesComponent },
      //  { path: 'manageGenerateReports', component: ManagerGenerateReportsComponent },
      //  { path: 'manageEditProfile', component: ManagerUpdateProfileComponent },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule],
  providers: []
})


export class CustomerRoutingModule {}
