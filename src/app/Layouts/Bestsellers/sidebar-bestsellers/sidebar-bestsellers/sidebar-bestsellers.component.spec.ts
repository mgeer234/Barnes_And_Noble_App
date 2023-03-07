import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBestsellersComponent } from './sidebar-bestsellers.component';

describe('SidebarBestsellersComponent', () => {
  let component: SidebarBestsellersComponent;
  let fixture: ComponentFixture<SidebarBestsellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBestsellersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
