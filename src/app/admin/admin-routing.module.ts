import { AdminComponent } from './admin/admin.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const adminRoutes: Routes = [
  {
    path: '',
    component:AdminComponent,
    children: [
      // { path: 'appointment', component: DoctorAppointmentsComponent },

    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  providers: []
})


export class AdminRoutingModule {}
