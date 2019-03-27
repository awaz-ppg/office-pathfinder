import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClikOfficeComponent } from './clik-office.component';

describe('ClikOfficeComponent', () => {
  let component: ClikOfficeComponent;
  let fixture: ComponentFixture<ClikOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClikOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClikOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
