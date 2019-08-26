import { MatSnackBar } from '@angular/material';
import { CustomerService } from './../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-view-meals',
  templateUrl: './customer-view-meals.component.html',
  styleUrls: ['./customer-view-meals.component.css']
})
export class CustomerViewMealsComponent implements OnInit {

  constructor(private activate:ActivatedRoute,private customerService:CustomerService,private snackBar:MatSnackBar) { }
  orderedMeals=[];
  currentUserID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.customerService.gettingUpcommigMeals(this.currentUserID).subscribe(response =>{
      console.log(response.mealOrders);
      this.orderedMeals=response.mealOrders;
      this.orderedMeals.map(meal =>{
        meal.orderDate=new Date(meal.orderDate).toDateString();
      });
    });
  }

}
