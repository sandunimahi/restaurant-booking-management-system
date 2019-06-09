import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-manage-manager',
  templateUrl: './admin-manage-manager.component.html',
  styleUrls: ['./admin-manage-manager.component.css']
})
export class AdminManageManagerComponent implements OnInit {

  constructor(private adminService:AdminService,private snackBar:MatSnackBar,public activate:ActivatedRoute) { }
  currentUserID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    console.log(this.currentUserID);

    this.getManagerDetails();
  }
  manager={dob:null,
  name:{
    firstname:null,
    lastname:null
  },
email:null
};
  managerID;
  getManagerDetails(){
    this.adminService.getManagerDetails(this.currentUserID).subscribe(response =>{
      if(response.manager.length==0){
        return
      }
      this.manager=response.manager[0];
      this.managerID=response.manager[0].userID;
      this.manager.dob=new Date(this.manager.dob).toDateString();
      console.log(this.manager);
    });
  }
  onRegisterManager(form:NgForm){
    console.log(form.value);

    if(form.invalid){

      this.snackBar.open("Please enter valid data","OK");
      return
    }
    if(form.value.password!=form.value.confirmPassword){
      console.log("Mismatch")
      this.snackBar.open("Password Mismatch","OK");
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
    this.adminService.registerManager(manager).subscribe(response => {
      if(response.userAdded)
      {
        this.snackBar.open( "User Added", "OK", {
        });
      }else if (!response.userAdded){
        this.snackBar.open( "User Cannot be addded, username already exist. Enter Another Username", "OK", {
        });
      }
      this.getManagerDetails();
    })
  }

  updateManager(form:NgForm){
    console.log(form.value);
    const manager={
      firstname:form.value.managerFirstName,
      lastname:form.value.managerLastName,
      address:form.value.managerAddress,
      contactNumber:form.value.managerContactNumber,
      email:form.value.managerEmail,
      userID:this.managerID
    }
    this.adminService.updateManager(manager).subscribe(response => {
      this.getManagerDetails();
      this.snackBar.open( "Manager Updated", null, {
        duration:2000
      });
    });
  }

  deleteManager(){
    const info={
      userID:this.currentUserID,
      managerID:this.managerID
    }
    this.adminService.deleteManager(info).subscribe(res=>{
      this.snackBar.open( "Manager Deleted", null, {
        duration:2000
      });
      this.manager={dob:null,
        name:{
          firstname:null,
          lastname:null
        },
      email:null
      };
      this.getManagerDetails();
    })
  }
}
