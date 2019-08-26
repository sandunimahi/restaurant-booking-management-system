import { MatSnackBar } from '@angular/material';
import { ManagerService } from './../manager.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-manager-generate-reports',
  templateUrl: './manager-generate-reports.component.html',
  styleUrls: ['./manager-generate-reports.component.css']
})
export class ManagerGenerateReportsComponent implements OnInit {

  constructor(private activate:ActivatedRoute,private managerService:ManagerService,private snackBar:MatSnackBar) { }
  currentUserID;
  ownerID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.managerService.getManagerDetails(this.currentUserID).subscribe(res =>{
      console.log(res.manager[0].ownerID);
      this.ownerID=res.manager[0].ownerID;
  });
  }

  totalOrders_data=[];
  totalReservations_data=[];
  onSearchTotalAdmissions(year:Number){
    // alert(year+" "+doctor);
    this.managerService.getTotalOrdersData(year,this.ownerID).subscribe(res=>{
      this.totalOrders_data=res.data;
      this.generateTotalOrdersChart();
    });
  }
  onSearchTotalReservations(year:Number){
    this.managerService.getTotalReservaionData(year,this.ownerID).subscribe(res=>{
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
