import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCityComponent } from './state-city.component';

describe('StateCityComponent', () => {
  let component: StateCityComponent;
  let fixture: ComponentFixture<StateCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateCityComponent]
    });
    fixture = TestBed.createComponent(StateCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
