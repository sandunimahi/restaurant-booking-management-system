import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-customer-restaurants',
  templateUrl: './customer-restaurants.component.html',
  styleUrls: ['./customer-restaurants.component.css']
})
export class CustomerRestaurantsComponent implements OnInit {

  constructor(private activate:ActivatedRoute,private customerService:CustomerService,private snackBar:MatSnackBar) { }
  restaurants=[];
  currentUserID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.customerService.getRestaurantDetails().subscribe(response =>{
      this.restaurants=response.restaurants;
      console.log(this.restaurants);
    });

  }
  selectedRestaurantMeals=[];
  selectedRestaurantOwnerID;
  selectRestaurant(meals:any,managerID:any){
    console.log(meals);
    this.selectedRestaurantMeals=meals;
    this.customerService.getRestaurantOwnerID(managerID).subscribe(response =>{
      this.selectedRestaurantOwnerID=response.ownerID;
    });
  }
  selectedMeal={name:"",mealType:"",price:""};
  selectMeal(selectedMeal:any){
  console.log(selectedMeal);
  this.selectedMeal=selectedMeal;

  }

  onAddOrder(form:NgForm){
    console.log("Hello");
    console.log(form.value);
    // console.log(this.currentMeals[form.value.mealName]);

    const order={
      ownerID:this.selectedRestaurantOwnerID,
      meal:{
      name:this.selectedMeal.name,
      mealType:this.selectedMeal.mealType,
      price:this.selectedMeal.price
      },
      quantity:form.value.quantity,
      bookedBy:{
        role:"Customer",
        id:this.currentUserID
      },
      orderDate:new Date(form.value.orderDate).toDateString(),
      orderTime:form.value.orderTime,
      orderType:form.value.dineInOrTakeAway,
      additionalDetails:form.value.additionalDetails,
    }
    //console.log(order);
    this.customerService.addMealOrder(order).subscribe(res =>{
      form.reset();
      this.snackBar.open( "Order has been placed. Thank you", null, {
        duration:1000
      });
    });
  }

  selectedRestaurantTables=[];
  selectedRestaurantOwnerID_reserveTable;
  onSelectRestaurant_reserveTable(tables:any,managerID:any){
    console.log(tables);
    console.log(managerID);
    this.selectedRestaurantTables=tables;
    this.customerService.getRestaurantOwnerID(managerID).subscribe(response =>{
      this.selectedRestaurantOwnerID_reserveTable=response.ownerID;
    });

  }
  selectedTable_ReserveTable={
    tableNo:"",
    tableSeats:"",
    type:"",
    description:"",
    tableLocation:""
  };

  onSelectTable(table :any){
    console.log(table);
    this.selectedTable_ReserveTable=table;

    const reservation={
      ownerID:this.selectedRestaurantOwnerID_reserveTable,
      table:{
      tableNo:this.selectedTable_ReserveTable.tableNo,
      tableType:this.selectedTable_ReserveTable.type,
      description:this.selectedTable_ReserveTable.description,
      location:this.selectedTable_ReserveTable.tableLocation,
      seats:this.selectedTable_ReserveTable.tableSeats
      },
      bookedBy:{
        role:"Customer",
        id:this.currentUserID
      },
      reservationDate:this.reservationDate,
      reservationTime:this.reservationTime
    }

    this.customerService.addTabeReservation(reservation).subscribe(res =>{
      this.snackBar.open( "Reservation has been placed. Thank you", null, {
        duration:1000
      });
    });
  }

  reservationDate:any;
  reservationTime:any;
  onConfirmReserveTable(form:NgForm){
    console.log(form.value);
    this.reservationDate=new Date(form.value.reseravtionDate).toDateString();
    this.reservationTime=form.value.reservationTime;
  }


}
