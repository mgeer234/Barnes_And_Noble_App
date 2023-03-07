import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCouponsComponent } from './cards-coupons.component';

describe('CardsCouponsComponent', () => {
  let component: CardsCouponsComponent;
  let fixture: ComponentFixture<CardsCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCouponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
