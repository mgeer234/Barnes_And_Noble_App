import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardsComponentComponent } from './book-cards-component.component';

describe('BookCardsComponentComponent', () => {
  let component: BookCardsComponentComponent;
  let fixture: ComponentFixture<BookCardsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCardsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
