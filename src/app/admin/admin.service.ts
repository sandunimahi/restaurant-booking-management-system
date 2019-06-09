import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";



@Injectable({ providedIn: 'root' })
export class AdminService{

  constructor(private http: HttpClient, private router: Router) {}
  registerManager(manager:any){

    return this.http.post<{userAdded:boolean}>("http://localhost:3000/api/manager/createManager",manager);
  }
}
