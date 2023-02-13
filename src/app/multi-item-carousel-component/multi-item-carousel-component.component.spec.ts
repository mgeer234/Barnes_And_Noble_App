import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemCarouselComponentComponent } from './multi-item-carousel-component.component';

describe('MultiItemCarouselComponentComponent', () => {
  let component: MultiItemCarouselComponentComponent;
  let fixture: ComponentFixture<MultiItemCarouselComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiItemCarouselComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiItemCarouselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
