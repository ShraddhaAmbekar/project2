import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelempComponent } from './hotelemp.component';

describe('HotelempComponent', () => {
  let component: HotelempComponent;
  let fixture: ComponentFixture<HotelempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelempComponent]
    });
    fixture = TestBed.createComponent(HotelempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
