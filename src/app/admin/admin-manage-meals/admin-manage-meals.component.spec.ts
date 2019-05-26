import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageMealsComponent } from './admin-manage-meals.component';

describe('AdminManageMealsComponent', () => {
  let component: AdminManageMealsComponent;
  let fixture: ComponentFixture<AdminManageMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
