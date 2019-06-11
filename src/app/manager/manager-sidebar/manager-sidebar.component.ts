import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.css']
})
export class ManagerSidebarComponent implements OnInit {
  @Input() public userID:string;

  constructor(public activate:ActivatedRoute,private managerService:ManagerService) { }
  currentUsername;
  ngOnInit() {
    this.managerService.getUserInfo(this.userID).subscribe(res=>{
      this.currentUsername=res.owner.username;
      console.log(this.currentUsername+"hjh")
    })
  }

}
