import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form13Component } from './form13.component';

describe('Form13Component', () => {
  let component: Form13Component;
  let fixture: ComponentFixture<Form13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Form13Component]
    });
    fixture = TestBed.createComponent(Form13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
