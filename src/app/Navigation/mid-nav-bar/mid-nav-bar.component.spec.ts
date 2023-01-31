import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidNavBarComponent } from './mid-nav-bar.component';

describe('MidNavBarComponent', () => {
  let component: MidNavBarComponent;
  let fixture: ComponentFixture<MidNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
