import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPromotionsComponent } from './manager-promotions.component';

describe('ManagerPromotionsComponent', () => {
  let component: ManagerPromotionsComponent;
  let fixture: ComponentFixture<ManagerPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
