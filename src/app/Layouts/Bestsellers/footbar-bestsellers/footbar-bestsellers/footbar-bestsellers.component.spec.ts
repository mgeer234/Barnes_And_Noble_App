import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbarBestsellersComponent } from './footbar-bestsellers.component';

describe('FootbarBestsellersComponent', () => {
  let component: FootbarBestsellersComponent;
  let fixture: ComponentFixture<FootbarBestsellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootbarBestsellersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootbarBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
