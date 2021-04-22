import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedShoppingItemsComponent } from './top-rated-shopping-items.component';

describe('TopRatedShoppingItemsComponent', () => {
  let component: TopRatedShoppingItemsComponent;
  let fixture: ComponentFixture<TopRatedShoppingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedShoppingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
