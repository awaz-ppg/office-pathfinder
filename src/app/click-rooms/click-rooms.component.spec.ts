import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickRoomsComponent } from './click-rooms.component';

describe('ClickRoomsComponent', () => {
  let component: ClickRoomsComponent;
  let fixture: ComponentFixture<ClickRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
