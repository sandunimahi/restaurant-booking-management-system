import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagerComponent } from './manager/manager.component';
import { ManagerMealsComponent } from './manager-meals/manager-meals.component';
import { ManagerTablesComponent } from './manager-tables/manager-tables.component';
import { ManagerGenerateReportsComponent } from './manager-generate-reports/manager-generate-reports.component';
import { ManagerUpdateProfileComponent } from './manager-update-profile/manager-update-profile.component';
import { ManagerPromotionsComponent } from './manager-promotions/manager-promotions.component';

const managerRoutes: Routes = [
  {
    path: '',
    component:ManagerComponent,
    children: [
       { path: 'manageMeals', component: ManagerMealsComponent },
       { path: 'manageTables', component: ManagerTablesComponent },
       { path: 'manageGenerateReports', component: ManagerGenerateReportsComponent },
       { path: 'managePromotions', component:ManagerPromotionsComponent },
       { path: 'managerUpdateProfile', component:ManagerUpdateProfileComponent},
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(managerRoutes)],
  exports: [RouterModule],
  providers: []
})


export class ManagerRoutingModule {}
