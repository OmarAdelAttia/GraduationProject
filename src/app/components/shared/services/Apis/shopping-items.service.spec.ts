import { TestBed } from '@angular/core/testing';

import { ShoppingItemsService } from './shopping-items.service';

describe('ShoppingItemsService', () => {
  let service: ShoppingItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
