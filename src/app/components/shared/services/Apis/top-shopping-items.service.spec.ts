import { TestBed } from '@angular/core/testing';

import { TopShoppingItemsService } from './top-shopping-items.service';

describe('TopShoppingItemsService', () => {
  let service: TopShoppingItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopShoppingItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
