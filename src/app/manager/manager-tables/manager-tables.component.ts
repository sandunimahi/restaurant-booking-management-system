import { MatSnackBar } from '@angular/material';
import { ManagerService } from './../manager.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager-tables',
  templateUrl: './manager-tables.component.html',
  styleUrls: ['./manager-tables.component.css']
})
export class ManagerTablesComponent implements OnInit {

  constructor(private activate:ActivatedRoute,private managerService:ManagerService,private snackBar:MatSnackBar) { }

  currentUserID;
  ownerID;
  bookedTables=[];
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.managerService.getManagerDetails(this.currentUserID).subscribe(res =>{
      console.log(res.manager[0].ownerID);
      this.ownerID=res.manager[0].ownerID;
      this.viewTables();

      this.managerService.gettingUpcommingTableReservations(this.ownerID).subscribe(response =>{
        console.log(response.tableReservations);
        this.bookedTables=response.tableReservations;
        this.bookedTables.map(table =>{
          table.reservationDate=new Date(table.reservationDate).toDateString();
        });
      });
  });

  }

  currentTables=[];
  viewTables(){
    this.currentTables=[];
    this.managerService.getRestaurantDetails(this.ownerID).subscribe(response =>{

      this.currentTables=response.owner.restaurant.tables;
      console.log(this.currentTables);
    });
  }

}

