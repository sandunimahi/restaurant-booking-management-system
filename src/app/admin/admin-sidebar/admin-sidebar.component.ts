import { AdminService } from './../admin.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  @Input() public userID:string;
  constructor(public activate:ActivatedRoute,private adminService:AdminService) { }
  currentUserID;
  currentUsername;
  ngOnInit() {
    // this.currentUserID=this.activate.snapshot.parent.params['id'];
    console.log(this.userID+"sasa");
    this.adminService.getUserInfo(this.userID).subscribe(res=>{
      this.currentUsername=res.owner.username;
      console.log(this.currentUsername+"hjh")
    })
  }

}
