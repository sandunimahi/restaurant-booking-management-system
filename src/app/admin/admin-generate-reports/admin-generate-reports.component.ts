import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
@Component({
  selector: 'app-admin-generate-reports',
  templateUrl: './admin-generate-reports.component.html',
  styleUrls: ['./admin-generate-reports.component.css']
})
export class AdminGenerateReportsComponent implements OnInit {

  constructor(private adminService:AdminService,private snackBar:MatSnackBar,public activate:ActivatedRoute) { }
  currentUserID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    //this.generateTotalOrdersChart();
  }
  totalOrders_data=[];
  totalReservations_data=[];
  onSearchTotalAdmissions(year:Number){
    // alert(year+" "+doctor);
    this.adminService.getTotalOrdersData(year,this.currentUserID).subscribe(res=>{
      this.totalOrders_data=res.data;
      this.generateTotalOrdersChart();
    });
  }
  onSearchTotalReservations(year:Number){
    this.adminService.getTotalReservaionData(year,this.currentUserID).subscribe(res=>{
      this.totalReservations_data=res.data;
      this.generateTotalReservationsChart();
    });
  }
  totalOrdersChart;
  generateTotalOrdersChart(){
    this.totalOrdersChart = new Chart('totalOrders', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
          {
            label:"Orders",
            backgroundColor: "#008080",
            data: this.totalOrders_data
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Total Orders'
        },
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  suggestedMin: 0,
                  precision:0
              }
          }],
        }
      }
    });
  }


  totalReservationsChart;
  generateTotalReservationsChart(){
    this.totalReservationsChart = new Chart('totalReservations', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
          {
            label:"Table Reservations",
            backgroundColor: "#00FFFF",
            data: this.totalReservations_data
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Total Reservations'
        },
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  suggestedMin: 0,
                  precision:0
              }
          }],
        }
      }
    });
  }
}
