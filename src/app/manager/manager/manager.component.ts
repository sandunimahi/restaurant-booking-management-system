import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(public activate:ActivatedRoute) { }
  currentUserID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.params['id'];
    console.log(this.currentUserID);
  }

}
