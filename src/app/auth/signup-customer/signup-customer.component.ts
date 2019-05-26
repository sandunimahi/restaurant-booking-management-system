import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup-customer',
  templateUrl: './signup-customer.component.html',
  styleUrls: ['./signup-customer.component.css']
})
export class SignupCustomerComponent implements OnInit {

  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  onRegister(form:NgForm){
    // console.log(form.value);
    if(form.invalid){
      return
    }
    if(form.value.password!=form.value.confirmPassword){
      console.log("Mismatch")
      return
    }
    const customer={
      username:form.value.username,
      password:form.value.password,
      firstname:form.value.customerFirstName,
      lastname:form.value.customerLastName,
      gender:form.value.gender,
      dob:new Date(form.value.customerDOB).toDateString(),
      address:form.value.customerAddress,
      city:form.value.customertCity,
      nic:form.value.customerNIC,
      contactNumber:form.value.customerContactNumber,
      email:form.value.customerEmail
    }
    console.log(customer);
    this.authService.registerCustomer(customer).subscribe(response => {
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
