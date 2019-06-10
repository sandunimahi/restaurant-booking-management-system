import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRestaurantsComponent } from './customer-restaurants.component';

describe('CustomerRestaurantsComponent', () => {
  let component: CustomerRestaurantsComponent;
  let fixture: ComponentFixture<CustomerRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
