import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginform2Component } from './loginform2.component';

describe('Loginform2Component', () => {
  let component: Loginform2Component;
  let fixture: ComponentFixture<Loginform2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Loginform2Component]
    });
    fixture = TestBed.createComponent(Loginform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
