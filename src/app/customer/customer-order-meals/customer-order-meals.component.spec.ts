import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderMealsComponent } from './customer-order-meals.component';

describe('CustomerOrderMealsComponent', () => {
  let component: CustomerOrderMealsComponent;
  let fixture: ComponentFixture<CustomerOrderMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOrderMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
