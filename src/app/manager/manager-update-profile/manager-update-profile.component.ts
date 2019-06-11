import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../manager.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-manager-update-profile',
  templateUrl: './manager-update-profile.component.html',
  styleUrls: ['./manager-update-profile.component.css']
})
export class ManagerUpdateProfileComponent implements OnInit {

  constructor(public activate:ActivatedRoute,private managerService:ManagerService,private snackBar:MatSnackBar) { }
  currentUserID;
  currentUsername;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    console.log(this.currentUserID);

    this.managerService.getUserInfo(this.currentUserID).subscribe(res=>{
      this.currentUsername=res.owner.username;
      console.log(this.currentUsername+"hjh")
    })

    this.getManagerDetails();
  }

  managerID;
  manager={dob:null,
    name:{
      firstname:null,
      lastname:null
    },
  email:null
  };
  getManagerDetails(){
    this.managerService.getManagerDetails(this.currentUserID).subscribe(response =>{
      console.log(response);
      if(response.manager.length==0){
        return
      }
      this.manager=response.manager[0];
      this.managerID=response.manager[0].userID;
      this.manager.dob=new Date(this.manager.dob).toDateString();
      console.log(this.manager);
    });
  }


  onUpdateInfo(form:NgForm){
    console.log(form.value);
    if(form.value.password!=form.value.confirmPassword){
      console.log("Mismatch");
      this.snackBar.open( "Password Mismatch", "OK", {
      });
    return
    }

    const manager={
      username:form.value.username,
      password:form.value.password,
      firstname:form.value.managerFirstName,
      lastname:form.value.managerLastName,
      gender:form.value.gender,
      dob:new Date(form.value.managerDOB).toDateString(),
      address:form.value.managerAddress,
      city:form.value.managertCity,
      nic:form.value.managerNIC,
      contactNumber:form.value.managerContactNumber,
      email:form.value.managerEmail,
      userID:this.currentUserID
    }
    console.log(manager);

    this.managerService.updateManager(manager).subscribe(response => {
      this.snackBar.open( "Manager Updated", null, {
        duration:2000
      });
    });
  }
}
