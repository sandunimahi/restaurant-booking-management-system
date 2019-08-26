import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-booked-tables',
  templateUrl: './customer-booked-tables.component.html',
  styleUrls: ['./customer-booked-tables.component.css']
})
export class CustomerBookedTablesComponent implements OnInit {

  constructor(private activate:ActivatedRoute,private customerService:CustomerService,private snackBar:MatSnackBar) { }
  currentUserID;
  bookedTables=[];
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.customerService.gettingUpcommingTableReservations(this.currentUserID).subscribe(response =>{
      console.log(response.tableReservations);
      this.bookedTables=response.tableReservations;
      this.bookedTables.map(table =>{
        table.reservationDate=new Date(table.reservationDate).toDateString();
      });
    });
  }

}
