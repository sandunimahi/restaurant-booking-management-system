import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageRestaurantComponent } from './admin-manage-restaurant.component';

describe('AdminManageRestaurantComponent', () => {
  let component: AdminManageRestaurantComponent;
  let fixture: ComponentFixture<AdminManageRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
