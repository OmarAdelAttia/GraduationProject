import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class TopRatedService {

  topRated: Observable<any[]>;

  constructor(firestore: AngularFirestore) {

    // this.topRated = firestore.collection('TopRated').valueChanges();

    this.topRated = firestore.collection('TopRated').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Object;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

}
