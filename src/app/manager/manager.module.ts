import { ManagerRoutingModule } from './manager-routing.module';

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
import { ManagerComponent } from './manager/manager.component';
import { ManagerMealsComponent } from './manager-meals/manager-meals.component';
import { ManagerTablesComponent } from './manager-tables/manager-tables.component';
import { ManagerGenerateReportsComponent } from './manager-generate-reports/manager-generate-reports.component';
import { ManagerUpdateProfileComponent } from './manager-update-profile/manager-update-profile.component';


import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';
import { ManagerPromotionsComponent } from './manager-promotions/manager-promotions.component';
@NgModule({
  imports: [
  ManagerRoutingModule,
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

 ManagerComponent,

 ManagerMealsComponent,

 ManagerTablesComponent,

 ManagerGenerateReportsComponent,

 ManagerUpdateProfileComponent,

 ManagerSidebarComponent,

 ManagerPromotionsComponent]
})
export class ManagerModule{}
