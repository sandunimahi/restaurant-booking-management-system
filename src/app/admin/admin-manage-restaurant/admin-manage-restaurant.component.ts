import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-manage-restaurant',
  templateUrl: './admin-manage-restaurant.component.html',
  styleUrls: ['./admin-manage-restaurant.component.css']
})
export class AdminManageRestaurantComponent implements OnInit {

  constructor(private adminService:AdminService,private snackBar:MatSnackBar,public activate:ActivatedRoute) { }
  currentUserID;
  currentRestaurantInfonation;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.getRestaurantDetails();

  }

  getRestaurantDetails(){
    this.adminService.getRestaurantDetails(this.currentUserID).subscribe(response=>{

      this.currentRestaurantInfonation=response.owner.restaurant;
      console.log(this.currentRestaurantInfonation);
    });
  }

  onUpdateRestaurant(form:NgForm){
    // console.log(form.value);

    const restaurant={
      userID:this.currentUserID,
      name:form.value.resName,
      city:form.value.resCity,
      contactNumber:form.value.resContact,
      description:form.value.description,
      opening:form.value.openingAt,
      closing:form.value.closingAt,
    }

    console.log(restaurant);
    this.adminService.updateRestaurant(restaurant).subscribe(res => {
      this.snackBar.open( "Restaurant Updated", null, {
        duration:2000
      });
      this.getRestaurantDetails();
    });
  }

}
