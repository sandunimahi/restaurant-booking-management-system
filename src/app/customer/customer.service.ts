import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";



@Injectable({ providedIn: 'root' })
export class CustomerService{
  constructor(private http: HttpClient, private router: Router) {}

  getUserInfo(userID:string){
    return this.http.get<{owner:any}>("http://localhost:3000/api/admin/getInfo/"+userID);

  }

  getCustomerDetails(userID:string){

    return this.http.get<{customer:any}>("http://localhost:3000/api/customer/getCustomerDetailsByCustomer/"+userID);
  }

  updateCustomer(customer:any){

    return this.http.post("http://localhost:3000/api/customer/updateCustomerByCustomer",customer);
  }

  getRestaurantDetails(){
    return this.http.get<{restaurants:any}>("http://localhost:3000/api/restaurant/getAllDetails");

  }

  getPromotionDetails(){
    return this.http.get<{promotions:any}>("http://localhost:3000/api/promotions/getAllDetails");
  }

  addMealOrder(order:any){
    return this.http.post("http://localhost:3000/api/customer/orderMeals",order);

  }

  getRestaurantOwnerID(id:any){
    return this.http.get<{ownerID:any}>("http://localhost:3000/api/orders/getRestaurantUserId/"+id);

  }
}
