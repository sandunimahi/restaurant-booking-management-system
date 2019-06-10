import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMealsComponent } from './customer-meals.component';

describe('CustomerMealsComponent', () => {
  let component: CustomerMealsComponent;
  let fixture: ComponentFixture<CustomerMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
