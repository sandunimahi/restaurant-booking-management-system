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

}
