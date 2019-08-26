import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerateReportsComponent } from './admin-generate-reports.component';

describe('AdminGenerateReportsComponent', () => {
  let component: AdminGenerateReportsComponent;
  let fixture: ComponentFixture<AdminGenerateReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenerateReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerateReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
