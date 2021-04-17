import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireButtonComponent } from './hire-button.component';

describe('HireButtonComponent', () => {
  let component: HireButtonComponent;
  let fixture: ComponentFixture<HireButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
