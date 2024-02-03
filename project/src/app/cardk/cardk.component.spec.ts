import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardkComponent } from './cardk.component';

describe('CardkComponent', () => {
  let component: CardkComponent;
  let fixture: ComponentFixture<CardkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardkComponent]
    });
    fixture = TestBed.createComponent(CardkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
