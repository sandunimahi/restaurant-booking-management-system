import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../manager.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-manager-meals',
  templateUrl: './manager-meals.component.html',
  styleUrls: ['./manager-meals.component.css']
})
export class ManagerMealsComponent implements OnInit {


  constructor(private activate:ActivatedRoute,private managerService:ManagerService,private snackBar:MatSnackBar) { }
  currentUserID;
  ownerID;
  upcomingMeals=[];
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.managerService.getManagerDetails(this.currentUserID).subscribe(res =>{
      console.log(res.manager[0].ownerID);
      this.ownerID=res.manager[0].ownerID;
      this.viewMeals();
      this.viewOrderedMealsHistory();
  });

  // this.managerService.gettingUpcommigMeals(this.ownerID).subscribe(response =>{
  //   console.log(response.mealOrders);
  //   this.upcomingMeals=response.mealOrders;
  //   this.upcomingMeals.map(meal =>{
  //     meal.orderDate=new Date(meal.orderDate).toDateString();
  //   });
  // });

  }
  menuAdded=[];
  onAddMenu(form:NgForm){
    this.menuAdded.push({name:form.value.meal,description:form.value.mealDescription,price:form.value.mealPrice});
    console.log(this.menuAdded);
    form.reset();


  }

  onClearMenu(){
    this.menuAdded=[];
  }

  onSubmitMenu(form:NgForm){
    const data={
      userID:this.ownerID,
      meal:this.menuAdded
    }
    console.log(data);
    this.managerService.addMenu(data).subscribe(response => {
      form.reset();
      this.snackBar.open( "Menu added", null, {
        duration:1000
      });
      this.viewMeals();
    });

  }

  currentMeals=[];
  viewMeals(){
    this.currentMeals=[];
    this.managerService.getRestaurantDetails(this.ownerID).subscribe(response =>{

      this.currentMeals=response.owner.restaurant.meals;
      console.log(this.currentMeals);
    });
  }

  onAddOrder(form:NgForm){
    // console.log(form.value);
    // console.log(this.currentMeals[form.value.mealName]);

    const order={
      ownerID:this.ownerID,
      meal:{
      name:this.currentMeals[form.value.mealName].name,
      description:this.currentMeals[form.value.mealName].description,
      price:this.currentMeals[form.value.mealName].price
      },
      quantity:form.value.orderQuantity,
      bookedBy:{
        role:"Manager",
        id:this.currentUserID
      },
      orderDate:new Date(form.value.orderDate).toDateString(),
      orderTime:form.value.orderTime,
      orderType:form.value.dineInOrTakeAway,
      additionalDetails:form.value.additionalDetails,
    }

    this.managerService.addMealOrder(order).subscribe(res =>{
      form.reset();
      this.snackBar.open( "Order has been placed. Thank you", null, {
        duration:1000
      });
    });
  }
  orderedMeals=[];
  viewOrderedMealsHistory(){
    this.orderedMeals=[];
    this.managerService.gettingUpcommigMeals(this.ownerID).subscribe(response =>{
      console.log(response);
      this.orderedMeals=response.mealOrders;
      console.log(this.orderedMeals);
      this.orderedMeals.forEach(meal => {
        meal.orderDate=new Date(meal.orderDate).toDateString();
      });
    });
  }
}
