import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ManagerService } from './../manager.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-manager-promotions',
  templateUrl: './manager-promotions.component.html',
  styleUrls: ['./manager-promotions.component.css']
})
export class ManagerPromotionsComponent implements OnInit {

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
  promotionAdded=[];
  onAddPromotion(form:NgForm){
    this.promotionAdded.push({description:form.value.promotionDescription,code:form.value.promotionCode});
    console.log(this.promotionAdded);
    form.reset();


  }

  onClearPromotion(){
    this.promotionAdded=[];
  }

  onSubmitPromotions(form:NgForm){
    const data={
      userID:this.ownerID,
      promotions:this.promotionAdded
    }
    console.log(data);
    this.managerService.addPromotion(data).subscribe(response => {
      form.reset();
      this.snackBar.open( "Promotions added", "OK", {
      });
    });

  }
}
