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
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.managerService.getManagerDetails(this.currentUserID).subscribe(res =>{
      console.log(res.manager[0].ownerID);
      this.ownerID=res.manager[0].ownerID;
  });

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
    });

  }
}
