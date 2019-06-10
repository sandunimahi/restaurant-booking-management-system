import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewMealsComponent } from './customer-view-meals.component';

describe('CustomerViewMealsComponent', () => {
  let component: CustomerViewMealsComponent;
  let fixture: ComponentFixture<CustomerViewMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerViewMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
