import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemsService {

  shoppingItems: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {

    // this.shoppingItems = firestore.collection('ShoppingItems').valueChanges();

    this.shoppingItems = firestore.collection('ShoppingItems').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Object;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  getShoppingItems(id) {
    return this.firestore.collection('shoppingItems').doc(id).valueChanges()
  }

}