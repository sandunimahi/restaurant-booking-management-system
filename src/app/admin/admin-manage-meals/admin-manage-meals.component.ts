import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-manage-meals',
  templateUrl: './admin-manage-meals.component.html',
  styleUrls: ['./admin-manage-meals.component.css']
})
export class AdminManageMealsComponent implements OnInit {

  constructor(private activate:ActivatedRoute,private adminService:AdminService,private snackBar:MatSnackBar) { }
  currentUserID;
  ownerID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.adminService.getManagerDetails(this.currentUserID).subscribe(res =>{
      console.log(res.manager[0].ownerID);
      this.ownerID=res.manager[0].ownerID;
      this.viewMeals();
  });

  }
  currentMeals=[];
  viewMeals(){
    this.currentMeals=[];
    this.adminService.getRestaurantDetails(this.ownerID).subscribe(response =>{

      this.currentMeals=response.owner.restaurant.meals;
      console.log(this.currentMeals);
    });
  }




  menuAdded=[];
  onAddMenu(form:NgForm){
    console.log(form.value);
    this.menuAdded.push({name:form.value.meal,description:form.value.mealDescription,price:form.value.mealPrice,mealType:form.value.mealType,mealStatus:form.value.mealStatus});
     console.log(this.menuAdded);
     form.reset();


  }

  onClearMenu(){
    this.menuAdded=[];
  }

  onSubmitMenu(){
    const data={
      userID:this.ownerID,
      meal:this.menuAdded
    }
    console.log(data);
    this.adminService.addMenu(data).subscribe(response => {
      this.viewMeals();
      this.snackBar.open( "Menu added", null, {
        duration:1000
      });
    });

  }
}
