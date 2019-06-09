import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUpdateProfileComponent } from './manager-update-profile.component';

describe('ManagerUpdateProfileComponent', () => {
  let component: ManagerUpdateProfileComponent;
  let fixture: ComponentFixture<ManagerUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
