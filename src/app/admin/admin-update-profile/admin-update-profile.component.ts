import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-update-profile',
  templateUrl: './admin-update-profile.component.html',
  styleUrls: ['./admin-update-profile.component.css']
})
export class AdminUpdateProfileComponent implements OnInit {

  constructor(private adminService:AdminService,private snackBar:MatSnackBar,public activate:ActivatedRoute) { }
  currentUserID;
  currentUsername;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.getAdminDetails();

    this.adminService.getUserInfo(this.currentUserID).subscribe(res=>{
      this.currentUsername=res.owner.username;
      console.log(this.currentUsername+"hjh")
    });

  }
  currentAdmin={dob:""};
  getAdminDetails(){
    this.adminService.getAdminDetails(this.currentUserID).subscribe(response=>{
      console.log(response.owner);
      response.owner.dob=new Date(response.owner.dob).toDateString();
      this.currentAdmin=response.owner;
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

    const owner={
      username:form.value.username,
      password:form.value.password,
      firstname:form.value.ownerFirstName,
      lastname:form.value.ownerLastName,
      gender:form.value.gender,
      dob:new Date(form.value.ownerDOB).toDateString(),
      address:form.value.ownerAddress,
      city:form.value.ownertCity,
      nic:form.value.ownerNIC,
      contactNumber:form.value.ownerContactNumber,
      email:form.value.ownerEmail,
      userID:this.currentUserID
    }
    console.log(owner);

    this.adminService.updateOwner(owner).subscribe(response => {
      this.snackBar.open( "Owner Updated", null, {
        duration:2000
      });
    });
  }
}
