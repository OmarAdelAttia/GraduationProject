import { ComponentFixture, TestBed } from '@angular/core/testing';

import { topRatedCoursesComponent } from './topRated-courses.component';

describe('topRatedCoursesComponent', () => {
  let component: topRatedCoursesComponent;
  let fixture: ComponentFixture<topRatedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ topRatedCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(topRatedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
