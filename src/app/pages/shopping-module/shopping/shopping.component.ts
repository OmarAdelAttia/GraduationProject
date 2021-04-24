import { Component, OnInit } from '@angular/core';
import { ShoppingItemsService } from '../../../components/shared/services/Apis/shopping-items.service';

export interface ShoppingItem { name: string; price: number; }
export interface ShoppingItemId extends ShoppingItem { id: string; }

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  itemsList: any = [];
  proteinItemsList: any = [];
  vitaminItemsList: any = [];
  fatLossItemsList: any = [];
  creatineItemsList: any = [];

  show = {
    allItems: true,
    proteinItems: false,
    vitaminItems: false,
    fatLossItems: false,
    creatineItems: false,
  }


  constructor(private shoppingItemsService: ShoppingItemsService) { }

  ngOnInit(): void {

    this.shoppingItemsService.shoppingItems.subscribe(result => {
      this.itemsList = result;
      // console.log(this.itemsList);

    });

    this.shoppingItemsService.shoppingItems.subscribe(result => {
      this.proteinItemsList = result.filter(p => p.Category == 'Protein');
      // console.log('p');
      // console.log(this.proteinItemsList);
    });

    this.shoppingItemsService.shoppingItems.subscribe(result => {
      this.vitaminItemsList = result.filter(v => v.Category == 'Vitamin');
      // console.log('v');
      // console.log(this.vitaminItemsList);
    });

    this.shoppingItemsService.shoppingItems.subscribe(result => {
      this.fatLossItemsList = result.filter(fl => fl.Category == 'Fat Loss');
      // console.log('fl');
      // console.log(this.fatLossItemsList);
    });

    this.shoppingItemsService.shoppingItems.subscribe(result => {
      this.creatineItemsList = result.filter(c => c.Category == 'Creatine');
      // console.log('c');
      // console.log(this.creatineItemsList);
    });

  }


}
