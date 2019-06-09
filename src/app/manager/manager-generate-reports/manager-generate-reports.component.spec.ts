import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGenerateReportsComponent } from './manager-generate-reports.component';

describe('ManagerGenerateReportsComponent', () => {
  let component: ManagerGenerateReportsComponent;
  let fixture: ComponentFixture<ManagerGenerateReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerGenerateReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerGenerateReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
