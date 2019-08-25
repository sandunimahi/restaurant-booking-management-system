import { CustomerViewMealsComponent } from './customer-view-meals/customer-view-meals.component';
import { CustomerUpdateProfileComponent } from './customer-update-profile/customer-update-profile.component';
import { CustomerRestaurantsComponent } from './customer-restaurants/customer-restaurants.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from './customer/customer.component';
import { CustomerBookedTablesComponent } from './customer-booked-tables/customer-booked-tables.component';

const customerRoutes: Routes = [
  {
    path: ':id',
    component:CustomerComponent,
    children: [
       { path: 'customerPromotions', component: CustomerHomeComponent },
       { path: 'restaurants', component: CustomerRestaurantsComponent },
       { path: 'updateCustomerProfile', component: CustomerUpdateProfileComponent },
       { path: 'viewOrderedMeals', component: CustomerViewMealsComponent },
       { path: 'viewBookedTables', component: CustomerBookedTablesComponent },

    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule],
  providers: []
})


export class CustomerRoutingModule {}
