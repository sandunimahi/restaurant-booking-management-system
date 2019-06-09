import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public activate:ActivatedRoute) { }
  currentUserID;
  ngOnInit() {
    this.currentUserID=this.activate.snapshot.params['id'];
    console.log(this.currentUserID);

  }

}
