import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-update-profile',
  templateUrl: './customer-update-profile.component.html',
  styleUrls: ['./customer-update-profile.component.css']
})
export class CustomerUpdateProfileComponent implements OnInit {
  currentUserID;
  constructor(private activate:ActivatedRoute,private customerService:CustomerService,private snackBar:MatSnackBar) { }
  currentUsername;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.customerService.getUserInfo(this.currentUserID).subscribe(res=>{
      this.currentUsername=res.owner.username;
      console.log(this.currentUsername+"hjh")
    })
    this.getCustomerDetails();

  }
  customerID;
  customer={dob:null,
    name:{
      firstname:null,
      lastname:null
    },
  email:null
  };
  getCustomerDetails(){
    this.customerService.getCustomerDetails(this.currentUserID).subscribe(response =>{
      console.log(response);
      if(response.customer.length==0){
        return
      }
      this.customer=response.customer[0];
      this.customerID=response.customer[0].userID;
      this.customer.dob=new Date(this.customer.dob).toDateString();
      console.log(this.customer);
    });
  }

  onUpdateInfo(form:NgForm){
   // console.log(form.value);
    if(form.value.password!=form.value.confirmPassword){
      console.log("Mismatch");
      this.snackBar.open( "Password Mismatch", "OK", {
      });
    return
    }
    const customer={
      username:form.value.username,
      password:form.value.password,
      firstname:form.value.customerFirstName,
      lastname:form.value.customerLastName,
      gender:form.value.customerGender,
      dob:new Date(form.value.customerDOB).toDateString(),
      address:form.value.customerAddress,
      city:form.value.customertCity,
      nic:form.value.customerNIC,
      contactNumber:form.value.customerContactNumber,
      email:form.value.customerEmail,
      userID:this.currentUserID
    }
    console.log(customer);

    this.customerService.updateCustomer(customer).subscribe(response => {
      this.snackBar.open( "Customer Updated", null, {
        duration:2000
      });
    });
  }

}
