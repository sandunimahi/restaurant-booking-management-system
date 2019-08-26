import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";



@Injectable({ providedIn: 'root' })
export class ManagerService{

  constructor(private http: HttpClient, private router: Router) {}

  getUserInfo(userID:string){
    return this.http.get<{owner:any}>("http://localhost:3000/api/admin/getInfo/"+userID);

  }

  getManagerDetails(userID:string){

    return this.http.get<{manager:any}>("http://localhost:3000/api/manager/getManagerDetailsByManager/"+userID);
  }

  updateManager(manager:any){

    return this.http.post("http://localhost:3000/api/manager/updateManagerByManager",manager);
  }

  addMenu(MealDetails:any){
    return this.http.post("http://localhost:3000/api/menu/addMenu",MealDetails);
  }

  addPromotion(PromotionDetails:any){
    return this.http.post("http://localhost:3000/api/promotions/addPromotions",PromotionDetails);
  }

  getRestaurantDetails(userID:any){
    return this.http.get<{owner:any}>("http://localhost:3000/api/manager/getRestaurantDetails/"+userID);
  }

  addMealOrder(order:any){
    return this.http.post("http://localhost:3000/api/manager/orderMeals",order);

  }

  viewOrderedMeals(ownerID:any){
    return this.http.get<{mealOrders:any}>("http://localhost:3000/api/manager/getOrderedMeals/"+ownerID);

  }

  gettingUpcommigMeals(id:any){
    return this.http.get<{mealOrders:any}>("http://localhost:3000/api/meals/getUpcomingMealOrdersByManager/"+id);

  }

  gettingUpcommingTableReservations(id:any){
    return this.http.get<{tableReservations:any}>("http://localhost:3000/api/tables/getUpcomingTableReservationsByManager/"+id);

  }

  getTotalOrdersData(year:Number,id:Number){
    return this.http.get<{ data:any}>("http://localhost:3000/api/admin/reports/getOrdersData/"+year+"&"+id);
  }

  getTotalReservaionData(year:Number,id:Number){
    return this.http.get<{ data:any}>("http://localhost:3000/api/admin/reports/getReservationData/"+year+"&"+id);
  }
}
