import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";



@Injectable({ providedIn: 'root' })
export class AdminService{

  constructor(private http: HttpClient, private router: Router) {}
  registerManager(manager:any){

    return this.http.post<{userAdded:boolean}>("http://localhost:3000/api/manager/createManager",manager);
  }

  getManagerDetails(userID:string){

    return this.http.get<{manager:any}>("http://localhost:3000/api/manager/getManagerDetails/"+userID);
  }

  updateManager(manager:any){

    return this.http.post("http://localhost:3000/api/manager/updateManager",manager);
  }

  getUserInfo(userID:string){
    return this.http.get<{owner:any}>("http://localhost:3000/api/admin/getInfo/"+userID);

  }

  deleteManager(info:any){
    return this.http.post("http://localhost:3000/api/manager/delete",info);

  }

  addTables(tableDetails:any){
    return this.http.post("http://localhost:3000/api/table/addTables",tableDetails);
  }

  getAdminDetails(userID:any){
    return this.http.get<{owner:any}>("http://localhost:3000/api/admin/getDetails/"+userID);

  }

  updateOwner(owner:any){

    return this.http.post("http://localhost:3000/api/admin/updateProfile",owner);
  }

  addPromotions(promotionDetails:any){
    return this.http.post("http://localhost:3000/api/promotions/add/Promotions",promotionDetails);
  }

  getRestaurantDetails(userID:any){
    return this.http.get<{owner:any}>("http://localhost:3000/api/manager/getRestaurantDetails/"+userID);
  }

  updateRestaurant(restaurantDetails:any){
    return this.http.post("http://localhost:3000/api/manager/updateRestaurant",restaurantDetails);
  }

  addMenu(MealDetails:any){
    return this.http.post("http://localhost:3000/api/menu/addMenu",MealDetails);
  }

  getTotalOrdersData(year:Number,id:Number){
    return this.http.get<{ data:any}>("http://localhost:3000/api/admin/reports/getOrdersData/"+year+"&"+id);
  }

  getTotalReservaionData(year:Number,id:Number){
    return this.http.get<{ data:any}>("http://localhost:3000/api/admin/reports/getReservationData/"+year+"&"+id);
  }
}
