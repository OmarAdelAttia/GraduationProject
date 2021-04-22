import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class TopShoppingItemsService {

  topShoppingItems: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {

    // this.topShoppingItems = firestore.collection('TopShoppingItems').valueChanges();

    this.topShoppingItems = firestore.collection('TopShoppingItems').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Object;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  getTopShoppingItems(id) {
    return this.firestore.collection('TopShoppingItems').doc(id).valueChanges()
  }

}