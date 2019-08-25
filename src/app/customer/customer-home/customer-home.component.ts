import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private router: Router,private activate:ActivatedRoute,private customerService:CustomerService,private snackBar:MatSnackBar) { }
  promotions=[];
  currentUserID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.parent.params['id'];
    this.customerService.getPromotionDetails().subscribe(response => {
      this.promotions=response.promotions;

    });

  }

  gotoRestaurant(){
    this.router.navigate(["/customer/"+this.currentUserID+"/restaurants"]);
  }

}
