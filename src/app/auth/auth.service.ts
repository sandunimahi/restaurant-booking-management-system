import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService{

  constructor(private http: HttpClient, private router: Router) {}

  registerCustomer(customer:any){

    return this.http.post<{userAdded:boolean}>("http://localhost:3000/api/customer/createCustomer",customer);

  }

  registerOwner(owner:any){
    console.log(owner)
    return this.http.post<{userAdded:boolean}>("http://localhost:3000/api/owner/createOwner",owner);

  }

}
