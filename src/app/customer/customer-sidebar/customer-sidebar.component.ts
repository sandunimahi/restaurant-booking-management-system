import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.css']
})
export class CustomerSidebarComponent implements OnInit {
  @Input() public userID:string;
  currentUsername;
  constructor(public activate:ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getUserInfo(this.userID).subscribe(res=>{
      this.currentUsername=res.owner.username;

    });
  }

}
