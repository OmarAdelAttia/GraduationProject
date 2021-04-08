import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlablablaComponent } from './blablabla.component';

describe('BlablablaComponent', () => {
  let component: BlablablaComponent;
  let fixture: ComponentFixture<BlablablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlablablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlablablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
