import { AdminRoutingModule } from './admin-routing.module';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,

} from '@angular/material';

import { FormsModule } from '@angular/forms';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminManageRestaurantComponent } from './admin-manage-restaurant/admin-manage-restaurant.component';
import { AdminManageManagerComponent } from './admin-manage-manager/admin-manage-manager.component';
import { AdminManagePromotionsComponent } from './admin-manage-promotions/admin-manage-promotions.component';
import { AdminManageMealsComponent } from './admin-manage-meals/admin-manage-meals.component';
import { AdminManageTablesComponent } from './admin-manage-tables/admin-manage-tables.component';
import { AdminUpdateProfileComponent } from './admin-update-profile/admin-update-profile.component';

@NgModule({
  imports: [
  AdminRoutingModule,
  CommonModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  A11yModule,
  DragDropModule,
  PortalModule,
  ScrollingModule,
  FormsModule

  ],
  declarations: [

 AdminComponent,

 AdminSidebarComponent,

 AdminManageRestaurantComponent,

 AdminManageManagerComponent,

 AdminManagePromotionsComponent,

 AdminManageMealsComponent,

 AdminManageTablesComponent,

 AdminUpdateProfileComponent]
})
export class AdminModule{}
