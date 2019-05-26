import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup-owner',
  templateUrl: './signup-owner.component.html',
  styleUrls: ['./signup-owner.component.css']
})
export class SignupOwnerComponent implements OnInit {

  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  onRegister(form:NgForm){
     console.log(form.value);
     if(form.invalid){
      return
    }
    if(form.value.password!=form.value.confirmPassword){
      console.log("Mismatch")
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
      restaurantName:form.value.resName,
      restaurantcontactNumber:form.value.resContact,
      restaurantCity:form.value.resCity,
      description:form.value.description,
    }
    console.log(owner);
    this.authService.registerOwner(owner).subscribe(response => {
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
