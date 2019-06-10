import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUpdateProfileComponent } from './customer-update-profile.component';

describe('CustomerUpdateProfileComponent', () => {
  let component: CustomerUpdateProfileComponent;
  let fixture: ComponentFixture<CustomerUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
