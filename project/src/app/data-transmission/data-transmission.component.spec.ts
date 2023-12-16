import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransmissionComponent } from './data-transmission.component';

describe('DataTransmissionComponent', () => {
  let component: DataTransmissionComponent;
  let fixture: ComponentFixture<DataTransmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataTransmissionComponent]
    });
    fixture = TestBed.createComponent(DataTransmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
