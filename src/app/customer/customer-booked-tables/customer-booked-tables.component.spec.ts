import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookedTablesComponent } from './customer-booked-tables.component';

describe('CustomerBookedTablesComponent', () => {
  let component: CustomerBookedTablesComponent;
  let fixture: ComponentFixture<CustomerBookedTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBookedTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBookedTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
