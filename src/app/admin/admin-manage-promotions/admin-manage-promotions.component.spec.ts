import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagePromotionsComponent } from './admin-manage-promotions.component';

describe('AdminManagePromotionsComponent', () => {
  let component: AdminManagePromotionsComponent;
  let fixture: ComponentFixture<AdminManagePromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagePromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagePromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
