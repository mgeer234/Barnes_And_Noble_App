import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCouponsComponent } from './footer-coupons.component';

describe('FooterCouponsComponent', () => {
  let component: FooterCouponsComponent;
  let fixture: ComponentFixture<FooterCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCouponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
