import { AdminComponent } from './admin/admin.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminManageRestaurantComponent } from './admin-manage-restaurant/admin-manage-restaurant.component';
import { AdminManageManagerComponent } from './admin-manage-manager/admin-manage-manager.component';
import { AdminManagePromotionsComponent } from './admin-manage-promotions/admin-manage-promotions.component';
import { AdminManageTablesComponent } from './admin-manage-tables/admin-manage-tables.component';
import { AdminManageMealsComponent } from './admin-manage-meals/admin-manage-meals.component';
import { AdminUpdateProfileComponent } from './admin-update-profile/admin-update-profile.component';

const adminRoutes: Routes = [
  {
    path: ':id',
    component:AdminComponent,
    children: [
       { path: 'manageRestaurant', component: AdminManageRestaurantComponent },
       { path: 'manageManager', component: AdminManageManagerComponent },
       { path: 'managePromotions', component: AdminManagePromotionsComponent },
       { path: 'manageTables', component: AdminManageTablesComponent },
       { path: 'manageMeals', component: AdminManageMealsComponent },
       { path: 'adminUpdateProfile', component: AdminUpdateProfileComponent},
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  providers: []
})


export class AdminRoutingModule {}
