import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService{
  private isAuthenticated = false;
  private token: string;

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  constructor(private http: HttpClient, private router: Router) {}

  registerCustomer(customer:any){

    return this.http.post<{userAdded:boolean}>("http://localhost:3000/api/customer/createCustomer",customer);

  }

  registerOwner(owner:any){
    console.log(owner)
    return this.http.post<{userAdded:boolean}>("http://localhost:3000/api/owner/createOwner",owner);

  }

  loginUser(username:string, role:string, password:string){
    console.log("Reached Front");
    const user:User={
      username:username,
      role:role,
      password:password
    }
    this.http.post<{ token: string,username: string, role: string,userID:string}>
    ("http://localhost:3000/api/user/login", user)
    .subscribe(response => {
      console.log("Making HTTP POST request to /api/user/login");

      const token = response.token;
      this.token = token;
    //  console.log(this.token + "Front");
    console.log("This is"+ response.role)
      if (token) {
        this.isAuthenticated = true;

       console.log(response.role);
       if(response.role=="Owner"){
         this.router.navigate(["/admin/"+response.userID]);
        }
        else if (response.role=="Manager"){
          this.router.navigate(["/manager/"+response.userID]);

        }
        else if(response.role=="Customer"){
          this.router.navigate(["/admin"]);
          console.log(response.userID)
        }
      }

    });
  }

}
