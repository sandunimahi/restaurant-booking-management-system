import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AdminService } from './../admin.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-admin-manage-promotions',
  templateUrl: './admin-manage-promotions.component.html',
  styleUrls: ['./admin-manage-promotions.component.css']
})
export class AdminManagePromotionsComponent implements OnInit {

  constructor(private activate:ActivatedRoute,private adminService:AdminService,private snackBar:MatSnackBar) { }
  currentUserID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.viewPromotions();
  }
  currentPromotions=[];
  viewPromotions(){
    this.currentPromotions=[];
    this.adminService.getRestaurantDetails(this.currentUserID).subscribe(response =>{

      this.currentPromotions=response.owner.restaurant.promotions;
      console.log(this.currentPromotions);
    });
  }

  promotionAdded=[];
  onAddPromotions(form:NgForm){
    this.promotionAdded.push({description:form.value.promotionDescription,code:form.value.promotionCode});
    console.log(this.promotionAdded);
    form.reset();



  }

  onClearPromotion(){
    this.promotionAdded=[];
  }

  onSubmitPromotions(form:NgForm){
    const data={
      userID:this.currentUserID,
      promotions:this.promotionAdded
    }
    console.log(data);
    this.adminService.addPromotions(data).subscribe(response => {
      form.reset();
      this.viewPromotions();
      this.snackBar.open( "Promotions added", "OK", {
      });
    });

  }
}
