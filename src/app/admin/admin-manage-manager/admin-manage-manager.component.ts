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

  constructor(private adminService:AdminService,private snackBar:MatSnackBar) { }

  ngOnInit() {
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
      email:form.value.managerEmail
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
    })
  }
}
