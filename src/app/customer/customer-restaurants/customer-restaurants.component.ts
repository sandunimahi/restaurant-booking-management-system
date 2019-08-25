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
  ngOnInit() {
    this.customerService.getRestaurantDetails().subscribe(response =>{
      this.restaurants=response.restaurants;
    });
  }
  selectedRestaurantMeals=[];
  selectRestaurant(meals:any){
    console.log(meals);
    this.selectedRestaurantMeals=meals;
  }
  selectedMeal={};
  selectMeal(selectedMeal:any){
  console.log(selectedMeal);
  this.selectedMeal=selectedMeal;
  }

}
