import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBestsellersComponent } from './carousel-bestsellers.component';

describe('CarouselBestsellersComponent', () => {
  let component: CarouselBestsellersComponent;
  let fixture: ComponentFixture<CarouselBestsellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBestsellersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
