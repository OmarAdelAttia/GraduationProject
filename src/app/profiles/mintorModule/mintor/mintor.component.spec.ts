import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintorComponent } from './mintor.component';

describe('MintorComponent', () => {
  let component: MintorComponent;
  let fixture: ComponentFixture<MintorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MintorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
