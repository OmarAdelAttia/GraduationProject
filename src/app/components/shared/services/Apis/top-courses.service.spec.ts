import { TestBed } from '@angular/core/testing';

import { TopCoursesService } from './top-courses.service';

describe('TopCoursesService', () => {
  let service: TopCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
