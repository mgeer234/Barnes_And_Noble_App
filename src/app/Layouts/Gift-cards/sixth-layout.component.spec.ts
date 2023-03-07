import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthLayoutComponent } from './sixth-layout.component';

describe('SixthLayoutComponent', () => {
  let component: SixthLayoutComponent;
  let fixture: ComponentFixture<SixthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
