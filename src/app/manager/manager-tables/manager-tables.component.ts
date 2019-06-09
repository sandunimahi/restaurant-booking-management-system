import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager-tables',
  templateUrl: './manager-tables.component.html',
  styleUrls: ['./manager-tables.component.css']
})
export class ManagerTablesComponent implements OnInit {

  constructor() { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
  }

}

