import { MatSnackBar } from '@angular/material';
import { AdminService } from './../admin.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-admin-manage-tables',
  templateUrl: './admin-manage-tables.component.html',
  styleUrls: ['./admin-manage-tables.component.css']
})
export class AdminManageTablesComponent implements OnInit {

  constructor(private activate:ActivatedRoute,private adminService:AdminService,private snackBar:MatSnackBar) { }
  currentUserID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.viewTables();
  }

  currentTables=[];
  viewTables(){
    this.currentTables=[];
    this.adminService.getRestaurantDetails(this.currentUserID).subscribe(response =>{

      this.currentTables=response.owner.restaurant.tables;
      console.log(this.currentTables);
    });
  }


  tablesAdded=[];
  onAddTable(form:NgForm){
    this.tablesAdded.push({type:form.value.tableType,description:form.value.tableDescription,number:form.value.numOfTables});
    console.log(this.tablesAdded);
    form.reset();


  }

  onClearTable(){
    this.tablesAdded=[];
  }

  onSubmitTableLayout(form:NgForm){
    const data={
      userID:this.currentUserID,
      tables:this.tablesAdded
    }
    console.log(data);
    this.adminService.addTables(data).subscribe(response => {
      form.reset();
      this.viewTables();
      this.snackBar.open( "Tables added", "OK", {
      });
    });

  }
}
