import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeBookCardComponent } from './large-book-card.component';

describe('LargeBookCardComponent', () => {
  let component: LargeBookCardComponent;
  let fixture: ComponentFixture<LargeBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeBookCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
