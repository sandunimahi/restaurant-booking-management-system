import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageManagerComponent } from './admin-manage-manager.component';

describe('AdminManageManagerComponent', () => {
  let component: AdminManageManagerComponent;
  let fixture: ComponentFixture<AdminManageManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
