import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageTablesComponent } from './admin-manage-tables.component';

describe('AdminManageTablesComponent', () => {
  let component: AdminManageTablesComponent;
  let fixture: ComponentFixture<AdminManageTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
