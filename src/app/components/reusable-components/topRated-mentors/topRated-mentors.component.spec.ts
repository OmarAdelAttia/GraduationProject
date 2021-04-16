import { ComponentFixture, TestBed } from '@angular/core/testing';

import { topRatedMentorsComponent } from './topRated-mentors.component';

describe('MentorsComponent', () => {
  let component: topRatedMentorsComponent;
  let fixture: ComponentFixture<topRatedMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ topRatedMentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(topRatedMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
